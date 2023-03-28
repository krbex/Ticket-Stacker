import React from 'react'
import Navbar from './components/nav/Nav'
import Home from './components/home/Home' 
import Info from './components/info/Info'
import Lounge from './components/lounge/Lounge'
import Travelers from './components/travelers/Travelers'
import Subscribers from './components/subscribers/Subscribers'
import Support from './components/support/Support'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      {/* <Info/>
      <Support/>
      <Lounge/>
      <Travelers/>
      <Subscribers/>
      <Footer/> */}
      </div>
  )
}

export default App