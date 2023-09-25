import SiteLayout from "./components/layouts/Sitelayout";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import Home from "./components/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import AddArticle from "./components/articles/AddArticle";
import EditArticle from "./components/articles/EditArticle";
import ListArticle from "./components/articles/ListArticle";
import ShowArticle from "./components/articles/ShowArticle";
import DeleteArticle from "./components/articles/DeleteArticle";
import ListMod from "./components/articles/ListMod";
import GridMod from "./components/articles/GridMod";
 export const routers = createBrowserRouter([
    {path:'/',element:<SiteLayout/>, children:[
        {path:'', element:<Home/>},
        {path:'/about',element:<About/>},
        {path:'/contact',element:<Contact/>}
  ]}, 
  {path:'/blog',element:<SiteLayout/>, children:[
    {path:'', element: <ListArticle/>},
    {path:'/blog/listarticle', element: <ListArticle/>},
    {path:'/blog/add' , element:<AddArticle/>},
    {path:'/blog/delete/:id' , element:<ListMod/>},
    {path:'/blog/Grid' , element:<GridMod/>},
    {path:'/blog/edit/:id', element:<EditArticle/>},
    {path:'/blog/show', element:<ShowArticle/>}
]},
  ])