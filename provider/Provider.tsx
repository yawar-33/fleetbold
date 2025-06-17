"use client"
import React, { useEffect, useState } from "react"
// import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { useRouter } from 'next/navigation'

// import posthog from 'posthog-js'
// import { PostHogProvider } from 'posthog-js/react'
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

// if (typeof window !== 'undefined') {
//   posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
//       api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
//       session_recording: {
//           recordCrossOriginIframes: true,
//       },
//       debug: true,
//       // __preview_send_client_session_params: true,
//       // __preview_measure_pageview_stats: true,
//       scroll_root_selector: ['#scroll_element', 'html'],
//   })
//   ;(window as any).posthog = posthog
// }


function Provider({ children }: any) {
  const [client] = useState(new QueryClient())



  return (
    <>
      <QueryClientProvider client={client}>
        {/* <ReactQueryStreamedHydration> */}
        {/* <PostHogProvider client={posthog}> */}
            {children}
       {/* </PostHogProvider> */}
        {/* </ReactQueryStreamedHydration> */}
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </>
  )
}

export { Provider }