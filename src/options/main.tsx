import { createRoot } from 'react-dom/client'
import React from 'react'
import Options from './components/Options'
import '../styles/global.css'

const App = createRoot(document.getElementById('root'))

App.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>
)
