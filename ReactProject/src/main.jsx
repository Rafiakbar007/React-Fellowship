import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
//import Counter from './Counterapp.jsx'
//import Cardapp from './Cardapp.jsx'
//import Bgchanger from './Bgchanger.jsx'
import Paswgenerator from './Paswgenerator.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Paswgenerator />
  </StrictMode>,
)
