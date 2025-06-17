import React, { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';


// Extend the Window interface to include the fbq function
declare global {
  interface Window {
    fbq: Function;
    _fbq?: Function;
  }
}

const MetaPixel: React.FC = () => {
  
// const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
// const options = {
//   autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
//   debug: false, // enable logs
// };
ReactPixel.init('1435902493685847');

ReactPixel.pageView(); // For tracking page view

  return (
    
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=1435902493685847&ev=PageView&noscript=1"
        alt="fb pixel"
      />
    </noscript>
  );
};

export default MetaPixel;

 