export const fbq = (
  command: "track" | "init",
  event: string,
  params?: Record<string, unknown>
) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq(command, event, params);
  }
};
