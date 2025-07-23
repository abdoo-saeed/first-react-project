import {Navbar} from '../Navbar/Navbar'
import {Footer} from '../Footer/Footer'
import  { Outlet } from 'react-router'


export function Layout() {
  return (
    <div>
      <Navbar />
      
     <Outlet/>

      <Footer />
    </div>
  )
}
