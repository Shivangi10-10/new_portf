import '../styles/globals.css'
import { Analytics } from "@vercel/analytics/next"
export default function MyApp({ Component, pageProps }) {
  <Analytics />
  return <Component {...pageProps} />
}
