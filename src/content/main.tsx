import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import CreateShadowDom from '../utils/CreateShadowDom'
import Widget from './components/Widget'
import Logo from '../../assets/logo.png'

const { root, container } = CreateShadowDom({
  styleSheetUrl: chrome.runtime.getURL('src/styles/global.css'),
  classNames: 'z-[100]',
  uniqueId: 'extension-inject',
})

document.body.appendChild(container)
const App = createRoot(root)

App.render(
  <React.StrictMode>
    <Widget />
  </React.StrictMode>
)
