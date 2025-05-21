'use client';

import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import ShareButton from './ShareButton';

const FooterShareButton = () => {
  useEffect(() => {
    const container = document.getElementById('footer-share-button');
    if (container && !container.hasChildNodes()) {
      const root = createRoot(container);
      root.render(
        <ShareButton className="text-sm" />
      );
    }
  }, []);

  return null;
};

export default FooterShareButton;
