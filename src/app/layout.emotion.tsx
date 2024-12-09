'use client';

import { ThemeProvider } from '@emotion/react';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const theme = {
  colors: {
    background: '#F6F6F6',
    primary100: '#EBF4FF',
    primary200: '#2182F3',
    textPrimary: '#000000',
    textSecondary: '#333333',
    textTertiary: '#454545',
    textMuted: '#868686',
    textDisabled: '#B9B9B9',
    border: '#E5E5E5',
    white: '#FFFFFF',
  },
  devices: {
    medium: '737px',
  },
};

const LayoutEmotion = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default LayoutEmotion;
