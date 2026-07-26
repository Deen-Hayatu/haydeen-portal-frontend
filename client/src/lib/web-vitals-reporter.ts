import {
  onCLS,
  onLCP,
  onINP,
  onTTFB,
  type Metric,
} from "web-vitals";

const SAMPLE_RATE = Number(import.meta.env.VITE_RUM_SAMPLE_RATE ?? "0.05");
const isSampled = Math.random() < SAMPLE_RATE;

const sendToRUM = (metric: Metric) => {
  if (!isSampled) return;

  const connection = (navigator as any).connection;
  const payload = {
    metric: metric.name,
    value: metric.value,
    id: metric.id,
    delta: (metric as any).delta,
    rating: (metric as any).rating,
    navigationType: (metric as any).navigationType,
    page: window.location.pathname,
    sampleRate: SAMPLE_RATE,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
    connection: connection
      ? {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData,
        }
      : undefined,
  };

  const body = JSON.stringify(payload);
  const endpoint = "/api/rum";

  if (navigator.sendBeacon) {
    navigator.sendBeacon(endpoint, body);
  } else {
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {
      // Swallow errors; RUM must not impact UX
    });
  }
};

export const initWebVitalsRUM = () => {
  if (!isSampled) return;

  const report = (metric: Metric) => sendToRUM(metric);

  onCLS(report);
  onLCP(report);
  onINP(report);
  onTTFB(report);
};

