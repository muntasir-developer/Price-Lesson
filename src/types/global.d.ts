export {};

declare global {
  interface Window {
    fbq?: (
      command: "track" | "init",
      event: string,
      params?: Record<string, unknown>
    ) => void;
  }
}
