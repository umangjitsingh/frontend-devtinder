import './App.css'
import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import {Provider} from "react-redux";
import appStore from "./utils/appStore.js";


function App() {
	const router = createBrowserRouter([
		{
			element : <Layout/>,
			path    : "",
			children: [
				{
					element: <Home/>,
					path   : '/'
				},
				{
					element: <Home/>,
					path   : "/home"
				},
				{
					element: <Login/>,
					path   : '/login'
				}
			]
		}
	])

	return (
		<Provider store={appStore}>
			<RouterProvider router={router}>
				<Layout/>
			</RouterProvider>
		</Provider>
		
	)
}

export default App
