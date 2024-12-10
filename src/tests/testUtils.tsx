import React from 'react';

import LayoutEmotion from '@app/layout.emotion';
import LayoutRecoil from '@app/layout.recoil';

export const wrapper = ({ children }: { children: React.ReactNode }) => (
  <LayoutRecoil>
    <LayoutEmotion>{children}</LayoutEmotion>
  </LayoutRecoil>
);
