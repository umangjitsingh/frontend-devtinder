import {useMemo, useState} from 'react'
import UserCard from "./UserCard.jsx";
import axios from "axios";
import {BASE_URL} from "../utils/constants.js";
import {useDispatch} from "react-redux";
import {addUser} from "../utils/userSlice.js";


const EditProfile = ({user}) => {
	const [error, setError] = useState("")
	const dispatch = useDispatch();
	const[message,setMessage]=useState(false)

	let [profile, setProfile] = useState({
		firstName: user?.firstName || "",
		lastName : user?.lastName || "",
		about    : user?.about || "",
		photoUrl : user?.photoUrl || "",
		password : user?.password || "",
		age      : user?.age || "",
		gender   : user?.gender || "",
		skills   : user?.skills?.join(",") || ""
	})

	const singleUser = useMemo(() => ({
		firstName: profile.firstName,
		lastName : profile.lastName,
		photoUrl : profile.photoUrl,
		age      : profile.age,
		gender   : profile.gender,
		about    : profile.about,
		skills   : profile.skills.split(",").map(s => s.trim())
	}), [profile]);

	function handleChange(e) {
		setProfile((prevState) => {
			return (
				{...prevState, [e.target.name]: e.target.value}
			)
		})
	}

	const saveProfile = async (e) => {
		try {
			setError("")
			e.preventDefault();
			const response = await axios.patch(BASE_URL + "/profile/edit", {
				firstName: profile.firstName,
				lastName : profile.lastName,
				photoUrl : profile.photoUrl,
				age      : profile.age,
				gender   : profile.gender,
				about    : profile.about,
				skills   : profile.skills.split(",").map(s => s.trim())
			}, {withCredentials: true})
			dispatch(addUser(response?.data))
			setMessage(true);
			setTimeout(()=>setMessage(false),3000)
		} catch (e) {
			setError(e.response?.data?.message)
		}
	}


	return (
		<div className="h-[77vh] flex justify-center  items-center ">
			{ message && <div className="toast toast-top toast-center">
				<div className="alert bg-gradient-to-r from-violet-900 to-purple-700">
					<span>Profile Saved Successfully.</span>
				</div>

			</div>}

			<fieldset style={{transform: 'scale(0.80)'}} className=" fieldset bg-zinc-900 border-zinc-800 rounded-xl w-sm border  p-6 hover:shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
				<legend className="fieldset-legend text-2xl tracking-tight uppercase text-zinc-300   font-bold">Edit
					Profile
				</legend>
				<form>
					<label className="label">FirstName</label>
					<input
						onChange={handleChange}
						type="text" name="firstName"
						value={profile.firstName}
						placeholder="FirstName"
						className="   input mb-2"
					/>

					<label className="label">LastName</label>
					<input
						onChange={handleChange}
						type="text" name="lastName"
						value={profile.lastName}
						placeholder="LastName"
						className="input mb-2"
					/>

					<label className="label">About</label>
					<textarea
						onChange={handleChange}
						name="about"
						value={profile.about}
						placeholder="about yourself..."
						className="textarea textarea-bordered w-full mb-2"
					/>

					<label className="label">Photo</label>
					<input
						onChange={handleChange}
						type="text" name="photoUrl"
						value={profile.photoUrl}
						placeholder="add a photo 📸"
						className="input mb-2"
					/>

					<label className="label">Age</label>
					<input
						onChange={handleChange}
						type="number"
						name="age"
						value={profile.age}
						className="input mb-2"
						placeholder="Age"/>

					<label className="label">Skills</label>
					<input
						onChange={handleChange}
						type="text"
						name="skills"
						value={profile.skills}
						className="input mb-2"
						placeholder="enter skills"/>

					<label className="label">Gender</label>
					<div className="flex items-center gap-2">
						<label>male</label>
						<input
							onChange={handleChange}
							type="radio"
							name="gender"
							value="male"
							checked={profile.gender === "male"}
							className="radio"
						/>
						<label>female</label>
						<input
							onChange={handleChange}
							type="radio"
							name="gender"
							value="female"
							checked={profile.gender === "female"}
							className="radio"
						/>
						<label>others</label>
						<input
							onChange={handleChange}
							type="radio"
							name="gender"
							value="others"
							checked={profile.gender === "others"}
							className="radio"
						/>

					</div>
					{error &&
						<p className="text-red-600 pt-2 pb-1">{error}</p>}
					<div className="w-full flex items-center justify-center">
						<button
							onClick={saveProfile}
							type="submit"
							className="btn bg-gray-700 hover:bg-gray-600 mt-4 tracking-wide"
						>
							Save Profile
						</button>
					</div>

				</form>

			</fieldset>

			<UserCard singleUser={singleUser} size={0.94}/>
		</div>
	)
}
export default EditProfile
