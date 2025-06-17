"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const SharePost = ({url}: any) => {
 
  const router = useRouter();
  const pathname = usePathname()
  // console.log('router', pathname)

  // Example usage of the URL\
  if (!url){
     url = process.env.NEXT_PUBLIC_BASE_URL && process.env.NEXT_PUBLIC_BASE_URL + pathname
     console.log('router', url)
  }
  
 
    const [text, setText] = useState(''); // State for Twitter text
  
    const shareOnFacebook = () => {
      window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), '_blank');
    };
  
    const shareOnLinkedIn = () => {
      window.open('https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(url), '_blank');
    };
  
    const shareOnTwitter = () => {
      window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url), '_blank');
    };
  



  return (
    <>
      
      <div className="mt-11 flex flex-wrap gap-4 md:items-center md:justify-between md:gap-0">
        <ul className="flex items-center gap-6">
          <li>
            <p className="text-black dark:text-white">Share On:</p>
          </li>
          <li>
            <a onClick={shareOnFacebook} href="#" aria-label="social link facebook">
              <svg
                className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_48_1499)">
                  <path
                    d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                    fill=""
                  />
                </g>
                <defs>
                  <clipPath id="clip0_48_1499">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
          <li>
            <a onClick={shareOnTwitter} href="#" aria-label="social link x">
            <svg 
            className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 75 75" viewBox="0 0 72 72" id="twitter-x"><switch><g><path d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66
                h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z">
                  </path>
                  </g>
                  </switch>
            </svg>
            </a>
          </li>
          <li>
            <a onClick={shareOnLinkedIn} href="#" aria-label="social link">
              <svg
                className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_48_1505)">
                  <path
                    d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                    fill=""
                  />
                </g>
                <defs>
                  <clipPath id="clip0_48_1505">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
    
        </ul>

     
      </div>
    </>
  );
};

export default SharePost;
