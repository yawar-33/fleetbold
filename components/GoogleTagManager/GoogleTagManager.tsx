"use client"
import { useEffect } from 'react';

// Define the props type
interface GoogleTagManagerProps {
  tagId?: string;
}

const GoogleTagManager: React.FC<GoogleTagManagerProps> = ({ tagId="GTM-KCCDGCLP" }) => {
  useEffect(() => {
    // Ensure execution only on the client side
    if (typeof window !== 'undefined') {
      const gtmScript = document.createElement('script');
      gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${tagId}');`;

      const gtmNoScript = document.createElement('noscript');
      gtmNoScript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${tagId}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

      document.head.appendChild(gtmScript);
      document.body.appendChild(gtmNoScript);

      return () => {
        if (document.head.contains(gtmScript)) {
          document.head.removeChild(gtmScript);
        }
        if (document.body.contains(gtmNoScript)) {
          document.body.removeChild(gtmNoScript);
        }
      };
    }
  }, [tagId]);

  return null;
};

export default GoogleTagManager;
