'use client';

import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import ShareButton from './ShareButton';
import DonationButton from './DonationButton';

const FooterActions = () => {
  useEffect(() => {
    const container = document.getElementById('footer-share-button');
    if (container && !container.hasChildNodes()) {
      const root = createRoot(container);
      root.render(
        <div className="flex items-center gap-4">
          <ShareButton className="text-sm" />
          <DonationButton variant="footer" />
        </div>
      );
    }
  }, []);

  return null;
};

export default FooterActions;
