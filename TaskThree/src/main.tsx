import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './page/main'
import '@/app/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
)
