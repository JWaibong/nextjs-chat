import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WASMContextProvider } from '../context/WASM'
import { SessionProvider } from "next-auth/react"
import { useEffect } from 'react'

const App = ({ Component, pageProps: {session, ...pageProps} }: AppProps) => {

  return (
    <SessionProvider session={session}>
    <WASMContextProvider>
      <Component {...pageProps} />
    </WASMContextProvider>
    </SessionProvider>
  )
}

export default App
