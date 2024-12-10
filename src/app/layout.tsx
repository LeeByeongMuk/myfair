import React from 'react';

import LayoutEmotion from '@app/layout.emotion';
import LayoutRecoil from '@app/layout.recoil';

import { pretendard } from '@fonts/index';

import '@app/global.css';

export const metadata = {
  title: 'myfair front pre-course',
  description: 'todolist',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <LayoutRecoil>
          <LayoutEmotion>{children}</LayoutEmotion>
        </LayoutRecoil>
      </body>
    </html>
  );
}
