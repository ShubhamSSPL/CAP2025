/**
 * ScrollToTop Component
 * Automatically scrolls to content area (below header) on route change
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Get header height to scroll to content area
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;

    // Scroll to position content at top of viewport (below header)
    window.scrollTo({
      top: headerHeight,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};
