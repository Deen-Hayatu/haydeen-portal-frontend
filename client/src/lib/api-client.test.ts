import { describe, expect, it, vi, afterEach } from "vitest";
import { ApiClientError, requestJson } from "./api-client";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("requestJson", () => {
  it("returns parsed response payload", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ success: true, value: 42 }), { status: 200 }),
      ),
    );

    const payload = await requestJson<{ success: boolean; value: number }>("/api/test", {
      method: "GET",
    });

    expect(payload.success).toBe(true);
    expect(payload.value).toBe(42);
  });

  it("throws ApiClientError with server message", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(
          JSON.stringify({
            success: false,
            error: { message: "Validation failed", code: "VALIDATION_ERROR" },
          }),
          { status: 400 },
        ),
      ),
    );

    await expect(
      requestJson("/api/test", {
        method: "POST",
      }),
    ).rejects.toBeInstanceOf(ApiClientError);
  });
});
