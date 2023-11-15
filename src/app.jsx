import './App.style.jsx'
import { MainAppContainer } from './App.style.jsx'
import { Routes, Route } from 'react-router-dom'
import AdminRoutes from './routes/admin.routes.jsx'
import LoginPage from './pages/login/login.pages.jsx'
import RegisterPage from './pages/register/register.pages.jsx'

function App() {
  return (
    <MainAppContainer>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path=':User/*' element={<AdminRoutes />} />
      </Routes>
    </MainAppContainer>
  )
}

export default App
