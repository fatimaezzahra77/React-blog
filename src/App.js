// import logo from './logo.svg';
import './App.css';
import {RouterProvider} from 'react-router-dom'
import '/node_modules/bootswatch/dist/lux/bootstrap.min.css';
import Footer from './components/shared/Footer';
import { routers } from './routing';

// const routers = createBrowserRouter([
//   {path:'/',element:<SiteLayout/>, children:[,
//   {path:'/about',element:<About/>},
//   {path:'/contact',element:<Contact/>},
//   {path:'/blog',element:<Blog/>}
// ]}
// ])

function App() {

  return (

    <div className="">
      <RouterProvider router = {routers} />
      <Footer/>
    </div>

  );
}

export default App;
