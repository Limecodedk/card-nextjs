import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import MyNav from './components/MyNav'
import Footer from './components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MyNav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
