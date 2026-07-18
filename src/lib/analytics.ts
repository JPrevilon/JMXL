type OutboundClick = {
  category: "album" | "merch";
  label: string;
  url: string;
};

type AnalyticsWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
  gtag?: (...args: unknown[]) => void;
};

export function trackOutboundClick({ category, label, url }: OutboundClick) {
  if (typeof window === "undefined") return;
  const analyticsWindow = window as AnalyticsWindow;
  const event = {
    event: "outbound_click",
    outbound_category: category,
    outbound_label: label,
    outbound_url: url,
  };

  analyticsWindow.dataLayer?.push(event);
  analyticsWindow.gtag?.("event", "outbound_click", event);
  window.dispatchEvent(new CustomEvent("jmxl:outbound-click", { detail: event }));
}
