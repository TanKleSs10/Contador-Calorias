import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ActivityProvaider } from './context/ActivityContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ActivityProvaider>
      <App />
    </ActivityProvaider>
  </React.StrictMode>,
)
