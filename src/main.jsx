import { createRoot } from 'react-dom/client'

  import { createBrowserRouter, RouterProvider } from 'react-router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Home } from './components/Home/Home'
import { Layout } from './components/Layout/Layout'
import { Portofolio } from './components/portofolio/Portofolio'
import './index.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'





const routing = createBrowserRouter([

{path:"/"   , element: <Layout/> ,children:[

  {index:true, element:<Home/>},
  {path:"/about" , element:<About/>},
  {path:"/portofolio" , element:<Portofolio/>},
  {path:"/contact" , element:<Contact/>}


]}




])

createRoot(document.getElementById('root')).render(
  <>


    <RouterProvider router={routing}>




    </RouterProvider>


  </>
)
