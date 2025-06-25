import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router";
import axios from "axios";
import {BASE_URL} from "../utils/constants.js";
import {removeUser} from "../utils/userSlice.js";



function Navbar() {

	const user=useSelector((state)=>state?.user?.user);
	const dispatch =useDispatch();
	const navigate=useNavigate();
	const handleLogout = async ()=>{
		try{
			await axios.post(BASE_URL + "/logout",
				{},
				{withCredentials:true});
			dispatch(removeUser());
			navigate('/login')

		}catch (e) {
			console.log(e.message)
		}
	}
	
	return (
		<div className="  px-2 py-1 border-neutral-700 border-b-[1px] ">
			<div className="navbar bg-base-100 shadow-sm  ">
				<div className="flex-1">
					<a className="btn btn-ghost text-3xl text-zinc-300 font-head">
						DevTinder <sup className="text-3xl ">..💬</sup></a>
				</div>

				{user && <div className="pr-6  ">
					<div className="dropdown dropdown-end">
						<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
							<div className="w-16 rounded-full relative ">
								<img
									alt="Tailwind CSS Navbar component"
									src={user.photoUrl} />
							</div>
						</div>

						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
							<li>
								<Link to='/profile' className="justify-between">
									Profile
									<span className="badge">New</span>
								</Link>
							</li>
							<li><Link to="/friends">Friends</Link></li>
							<li><a onClick={handleLogout}>Logout</a></li>
						</ul>
					</div>
					<p className="absolute tracking-wider  font-medium text-sm top-[4%] right-[100px]"> <span className=" tracking-wide text-gray-400-200 font-light">Welcome,
					</span> {`${user.firstName.charAt(0).
					toUpperCase()}${user.firstName.slice(1)}
					 ${user.lastName.charAt(0).toUpperCase()}${user.lastName.slice(1)}`}
					</p>
				</div>}
			</div>
		</div>


	);
}

export default Navbar;