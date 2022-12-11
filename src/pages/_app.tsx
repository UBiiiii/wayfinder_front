import '../css/globals.css'
import '../css/main.css'

import type { AppProps } from 'next/app'
import Header from '../component/Header'
import { Provider } from 'react-redux'
import store from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
