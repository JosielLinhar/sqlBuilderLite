import { StrictMode } from 'react'
import {TextoProvider} from './components/Context.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TextoProvider>
      <App />
    </TextoProvider>
  </StrictMode>,
)
