import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { ThemeProvider } from '@material-tailwind/react'

// custom styling for the drawer so that the overlay has fixed position
const customTheme = {
  drawer: {
    styles: {
      base: {
        overlay: {
          position: "fixed"
        }
      }
    }
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider value={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
