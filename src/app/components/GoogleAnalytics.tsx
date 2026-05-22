'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Get GA ID from environment
    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    // Skip if no GA ID is configured
    if (!gaId) {
      return;
    }

    // Check if scripts are already loaded
    if (document.querySelector('script[src*="googletagmanager.com"]')) {
      // Just track page view
      if (window.gtag) {
        window.gtag('config', gaId, {
          page_path: pathname,
        });
      }
      return;
    }

    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}');
    `;
    document.head.appendChild(script2);

    // Track initial page view
    if (window.gtag) {
      window.gtag('config', gaId, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}

