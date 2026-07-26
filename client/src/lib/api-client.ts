export interface ApiErrorDetail {
  field?: string;
  path?: (string | number)[] | string;
  message: string;
  code?: string;
}

export interface ApiErrorPayload {
  success?: false;
  error?: {
    message?: string;
    code?: string;
    action?: string;
    details?: ApiErrorDetail[];
  };
}

export class ApiClientError extends Error {
  readonly status: number;
  readonly code?: string;
  readonly action?: string;
  readonly details?: ApiErrorDetail[];

  constructor(message: string, status: number, payload?: ApiErrorPayload) {
    super(message);
    this.name = "ApiClientError";
    this.status = status;
    this.code = payload?.error?.code;
    this.action = payload?.error?.action;
    this.details = payload?.error?.details;
  }
}

async function safeJson(res: Response): Promise<any> {
  const text = await res.text();
  if (!text) return null;

  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

export async function requestJson<T>(
  url: string,
  init: RequestInit = {},
  timeoutMs = 15000,
): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      credentials: "include",
      ...init,
      signal: controller.signal,
    });

    const payload = await safeJson(response);
    if (!response.ok) {
      const message =
        payload?.error?.message ||
        payload?.message ||
        `Request failed with status ${response.status}`;
      throw new ApiClientError(message, response.status, payload || undefined);
    }

    return (payload ?? {}) as T;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new ApiClientError("Request timed out. Please try again.", 408);
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

export async function requestFormData<T>(
  url: string,
  formData: FormData,
  timeoutMs = 20000,
): Promise<T> {
  return requestJson<T>(
    url,
    {
      method: "POST",
      body: formData,
    },
    timeoutMs,
  );
}
