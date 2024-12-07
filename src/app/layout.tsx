import React from 'react';

import LayoutEmotion from './layout.emotion';
import LayoutRecoil from './layout.recoil';

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
      <body>
        <LayoutRecoil>
          <LayoutEmotion>{children}</LayoutEmotion>
        </LayoutRecoil>
      </body>
    </html>
  );
}
