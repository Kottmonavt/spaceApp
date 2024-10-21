import React from 'react'
import  ReactDOM  from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import './global.css' // импорт глобальных стилей 
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
