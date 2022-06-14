import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.scss'

import { Routess } from './routes'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routess />
  </React.StrictMode>
)