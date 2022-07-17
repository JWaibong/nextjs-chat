import { ReactNode, useEffect, useState } from 'react'
import { createContext } from 'react'

const initial: IWASMContext = {}

export const WASMContext = createContext(initial)

export const WASMContextProvider: React.FC<WASMContextProviderProps> = ({
  children
}) => {
  const [state, setState] = useState<IWASMContext>(initial)

  useEffect(() => {
    (async() => {
      const wasm = await import('/home/jwaibong/wasm-ledger/wasm/pkg/wasm.js')
      await wasm.default()
      setState({ wasm })
    })()
  }, [])

  return (
    <WASMContext.Provider value={state}>
      {children}
    </WASMContext.Provider>
  )
}

interface IWASMContext {
  wasm?: typeof import('/home/jwaibong/wasm-ledger/wasm/pkg/wasm.js')
}

interface WASMContextProviderProps {
  children: ReactNode
}
