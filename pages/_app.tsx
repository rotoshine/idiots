import './_app.scss'

import type { AppProps } from 'next/app'

export default function IdiotsApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
