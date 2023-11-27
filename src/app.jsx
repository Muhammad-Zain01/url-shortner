import './App.style.jsx'
import { MainAppContainer } from './App.style.jsx'
import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
const AdminRoutes = lazy(() => import('./routes/admin.routes.jsx'));
const LoginPage = lazy(() => import('./pages/login/login.pages.jsx'));
const RegisterPage = lazy(() => import('./pages/register/register.pages.jsx'));
const NotFound = lazy(() => import('./pages/not-found/not-found.pages.jsx'));
const HomePage = lazy(() => import('./pages/home-page/home-page.pages.jsx'));

function App() {
  return (
    <MainAppContainer>
      <Routes>
        <Route path='/not-found' element={<NotFound />} />
        <Route path='/:User/*' element={<AdminRoutes />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </MainAppContainer>
  )
}

export default App