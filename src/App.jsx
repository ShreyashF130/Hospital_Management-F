import React from 'react'
import{Route,Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Doctors from './pages/doctors.jsx'
import Login from './pages/Login.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import MyProfile from './pages/MyProfile.jsx'
import MyAppointment from './pages/MyAppointment.jsx'
import Appointement from './pages/Appointement.jsx'
import Navbar from './components/Navbar.jsx'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      {/* navbar is  outside so that it will br visible in all page */}
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/doctors'element={<Doctors/>} />
        <Route path='/doctors/:speciality'element={<Doctors/>} />
        <Route path='/login'element={<Login/>} />
        <Route path='/about'element={<About/>} />
        <Route path='/contact'element={<Contact/>} />
        <Route path='/my-profile'element={<MyProfile/>} />
        <Route path='/my-appointments'element={<MyAppointment/>} />
        <Route path='/appointement/:docId'element={<Appointement/>} />
      </Routes>
      
    </div>
  )
}

export default App
