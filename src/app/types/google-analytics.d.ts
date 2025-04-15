interface Window {
  gtag: (
    command: 'config' | 'event' | 'js',
    targetId: string,
    config?: {
      page_path?: string;
      [key: string]: string | number | boolean | null | undefined;
    }
  ) => void;
  dataLayer: Array<{
    [key: string]: string | number | boolean | null | undefined;
  }>;
}