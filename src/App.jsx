import './App.css'
import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";
import Layout from "./Layout.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import {Provider} from "react-redux";
import appStore from "./utils/appStore.js";
import Feed from "./pages/Feed.jsx";


function App() {
	const router = createBrowserRouter([
		{
			element : <Layout/>,
			path    : "",
			children: [
				{
					element: <Profile/>,
					path   : '/'
				},
				{
					element: <Profile/>,
					path   : "/profile"
				},
				{
					element: <Login/>,
					path   : '/login'
				},
				{
					element:<Feed/>,
					path:'/feed'
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
