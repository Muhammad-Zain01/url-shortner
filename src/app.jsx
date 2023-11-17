import './App.style.jsx'
import { MainAppContainer } from './App.style.jsx'
import { Routes, Route } from 'react-router-dom'
import AdminRoutes from './routes/admin.routes.jsx'
import LoginPage from './pages/login/login.pages.jsx'
import RegisterPage from './pages/register/register.pages.jsx'
import RedirectKeyword from './pages/redirect-keyword/redirect-keyword.pages.jsx'
function App() {
  return (
    <MainAppContainer>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/:User/*' element={<AdminRoutes />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='go/:keyword' element={<RedirectKeyword />} />
      </Routes>
    </MainAppContainer>
  )
}

export default App
