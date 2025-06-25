import './App.css'
import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";
import Layout from "./Layout.jsx";
import Body from "./pages/Body.jsx";
import Login from "./pages/Login.jsx";
import {Provider} from "react-redux";
import appStore from "./utils/appStore.js";
import Feed from "./pages/Feed.jsx";
import Profile from "./components/Profile.jsx";


function App() {
	const router = createBrowserRouter([
		{
			element : <Body/>,
			path    : "/",
			children: [
				{
					element:<Feed/>,
					path:'/'
				},
				{
					element: <Login/>,
					path   : '/login'
				},
				{
					element:<Profile/>,
					path:'profile'
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
