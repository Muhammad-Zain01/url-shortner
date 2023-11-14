import './App.style.jsx'
import { MainAppContainer } from './App.style.jsx'
import { Routes, Route } from 'react-router-dom'
import DashboardRoute from './routes/dashboard/dashboard.routes.jsx'
function App() {
  return (
    <MainAppContainer>
      <Routes>
        <Route path='user/*' element={<DashboardRoute />} />
      </Routes>
      
    </MainAppContainer>
  )
}

export default App
