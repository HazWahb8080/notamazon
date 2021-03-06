import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux'
import { store } from '../src/app/store'


export default function MyApp({ Component, pageProps: { session, ...pageProps } }) 

{
  return (
  <SessionProvider session={session}>
    <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
  </SessionProvider>
)
}


