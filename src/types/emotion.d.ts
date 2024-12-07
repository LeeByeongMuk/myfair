import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      background: string;
      primary100: string;
      primary200: string;
      textPrimary: string;
      textSecondary: string;
      textTertiary: string;
      textMuted: string;
      textDisabled: string;
      border: string;
    };
    fonts: {
      body: string;
    };
    devices: {
      medium: string;
    };
  }
}