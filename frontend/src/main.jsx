import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { lighten, mode } from '@chakra-ui/theme-tools'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

const styles = { 
  global:(props) => ({
    body:{
      color:mode('gray.800','whiteAplha.900')(props),
      bg:mode('gray.100','#101010')(props),
    }
  })
}

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const colors = {
  gray:{
    light: "#616161",
    dark: "#1e1e1e"
  }
}

const theme = extendTheme({ config, styles, colors})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilRoot>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <App/>
    </ChakraProvider>
    </BrowserRouter>
    </RecoilRoot>
  </StrictMode>,
)
