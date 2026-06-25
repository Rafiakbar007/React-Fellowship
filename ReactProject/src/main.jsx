import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
//import Counter from './Counterapp.jsx'
//import Cardapp from './Cardapp.jsx'
import Bgchanger from './Bgchanger.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bgchanger />
  </StrictMode>,
)
