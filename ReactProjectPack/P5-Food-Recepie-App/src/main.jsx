import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import RecipeProvider from './context/RecipeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RecipeProvider>
        <App />
    </RecipeProvider>
    
  </StrictMode>,
)
