import React from 'react'
import ReactDOM from 'react-dom/client'

import './sass/styles.scss'
import { MySite } from './MySite'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MySite />
  </React.StrictMode>,
)
