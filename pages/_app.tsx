import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Google} from '../components/Google'
import Head from 'next/head'
import getConfig from 'next/config';



const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();
const trackingId: string = publicRuntimeConfig.TRACKING_ID || serverRuntimeConfig.TRACKING_ID;






function MyApp ({ Component, pageProps}: AppProps){

  return( 
    <>
    <div>

      
    {/* <!-- Google tag (gtag.js) --> */}
    <Head>
          {trackingId && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
                }}
              />
            </>
          )}
        </Head>



          <div>
            <Component {...pageProps} />
          </div>


    </div>

    </>
   
  )
}



export default MyApp
