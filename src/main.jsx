import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense>
        <ConfigProvider theme={{ token: { colorPrimary: '#0766AD', borderRadius: 2 } }}>
          <App />
        </ConfigProvider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)
