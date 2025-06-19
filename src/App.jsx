
import './App.css'
import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";


function App() {
const router= createBrowserRouter([
   {
      element:<Layout/>,
      path:"",
      children:[
         {
            element:<Home/>,
            path:'/'
         },
         {
            element:<Home/>,
            path:"/home"
         },
         {
            element:<Login/>,
            path:'/login'
         }
      ]
   }
])

  return (
     <RouterProvider router={router}>
   <Layout/>
</RouterProvider>
  )
}

export default App
