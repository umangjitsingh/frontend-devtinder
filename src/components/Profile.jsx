
import EditProfile from "./EditProfile.jsx";
import {useSelector} from "react-redux";


const Profile = () => {
	const user =useSelector((store)=>store.user);
	const User=user?.user;

	return (
		user && <div>
			<EditProfile user={User}/>
		</div>
	)
}
export default Profile
