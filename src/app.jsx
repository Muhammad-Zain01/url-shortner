import './App.style'
import { MainAppContainer } from './App.style'
import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
const AdminRoutes = lazy(() => import('./routes/admin.routes'));
const LoginPage = lazy(() => import('./pages/login/login.pages'));
const ForgotPassword = lazy(() => import('./pages/forgot-password/forgot-password.pages'));
const RegisterPage = lazy(() => import('./pages/register/register.pages'));
const NotFound = lazy(() => import('./pages/not-found/not-found.pages'));
const HomePage = lazy(() => import('./pages/home-page/home-page.pages'));

function App() {
  return (
    <MainAppContainer>
      <Routes>
        <Route path='/not-found' element={<NotFound />} />
        <Route path='/:User/*' element={<AdminRoutes />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </MainAppContainer>
  )
}

export default App