
import './App.css'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import Footer from './components/Footer'  
import FormRegister from './pages/FormRegister'
import FormLogin from './pages/FormLogin'
import NotFound from './pages/NotFound'
// import Profile from './components/Profile'
import { Route, Routes } from 'react-router-dom'
import { UserProvider } from './components/UserContext'
import Entrenador from './pages/Entrenador'


function App() {
  return (
<div className="min-h-dvh w-screen overflow-x-hidden">
      <UserProvider>
        
      <Header />
      <Routes >
    <Route path='/' element={ <MainPage /> } />
      <Route path='/register' element={ <FormRegister /> } />
     <Route path='/login' element={ <FormLogin /> } /> 
    <Route path='/entrenador' element={<Entrenador />} />
      <Route path='/*' element={ <NotFound /> } /> 
</Routes>
<Footer />
    </UserProvider>
</div>
  )
}

export default App
