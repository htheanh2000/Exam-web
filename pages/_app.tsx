import '../styles/globals.css'
import '../styles/fontSize.scss'
import '../styles/color.scss'
import '../styles/mixins.scss'
import '../styles/animation.scss'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  
  return <Component {...pageProps} />
}

export default MyApp
