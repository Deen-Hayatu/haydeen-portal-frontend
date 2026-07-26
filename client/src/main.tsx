import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initWebVitalsRUM } from "./lib/web-vitals-reporter";
import { initClientMonitoring } from "./lib/monitoring";

initClientMonitoring();
createRoot(document.getElementById("root")!).render(<App />);

initWebVitalsRUM();
