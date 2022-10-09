import React from 'react'
import Script from 'next/script';

export const Google = () => {
  return (
    <>
    {/* <!-- Google tag (gtag.js) --> */}
    <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></Script>
      
    <Script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());

      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
      page_path: window.location.pathname,
    </Script>

    </>

  )
}
