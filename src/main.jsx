import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { UserProvider } from './context/user.context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense>
        <ConfigProvider theme={{ token: { colorPrimary: '#0766AD', borderRadius: 4 } }}>
          <UserProvider>
            <App />
          </UserProvider>
        </ConfigProvider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)
