
import Navbar from "./components/Navbar.jsx";
import {Outlet} from "react-router";
import Footer from "./components/Footer.jsx";


function Layout() {
	return (
		<div className="h-screen w-full ">
			<Navbar/>
			<Outlet/>
			<Footer/>
		</div>
	);
}

export default Layout;