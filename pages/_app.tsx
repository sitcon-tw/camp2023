import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>SITCON 夏令營 2023</title>
    </Head>
    <Component {...pageProps} />
  </>
}
