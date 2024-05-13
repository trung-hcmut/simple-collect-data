import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CustomLayout } from './layout'

function App({ Component, pageProps }: AppProps) {
  return (
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
  )
}

export default App
