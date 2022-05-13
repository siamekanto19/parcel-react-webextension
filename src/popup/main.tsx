import { createRoot } from 'react-dom/client'
import React from 'react'
import Popup from './components/Popup'
import '../styles/global.css'

const App = createRoot(document.getElementById('root'))

App.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
)
