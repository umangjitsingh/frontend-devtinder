import  {useState} from 'react'
import UserCard from "./UserCard.jsx";


const EditProfile = ({user}) => {

	console.log(user.age)

	const [profile, setProfile] = useState({
		firstName: user?.firstName ||"",
		lastName : user?.lastName || "",
		about    : user?.about || "",
		photo    : user?.photoUrl || "",
		password : user?.password || "",
		age:user?.age || ""
	})

	function handleChange(e) {
		setProfile((prevState) => {
			return (
				{...prevState, [e.target.name]: e.target.value}
			)
		})
	}

	return (
		<div className="flex justify-evenly  items-center ">
			<fieldset className="fieldset bg-zinc-900 border-zinc-800 rounded-box w-sm border mt-6 p-8">
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
					<input
						onChange={handleChange}
						type="text" name="about"
						value={profile.about}
						placeholder="about yourself..."
						className="input mb-2"
					/>

					<label className="label">Photo</label>
					<input
						onChange={handleChange}
						type="text" name="photo"
						value={profile.photo}
						placeholder="add a photo 📸"
						className="input mb-2"
					/>

					<label className="label">Age</label>
					<input
						onChange={handleChange}
						type="number"
						name="age"
						value={profile.age}
						className="input"
						placeholder="Age"/>

					{/*{error && <p className="text-red-600 pt-2 pb-1">{error}</p>}*/}
					<div className="w-full flex items-center justify-center">
						<button
							type="submit"
							className=" btn bg-gray-700 hover:bg-gray-600 mt-6 tracking-wide ">Save
							Profile
						</button>
					</div>

				</form>

			</fieldset>

			<UserCard singleUser={user} size={0.9}/>
		</div>
	)
}
export default EditProfile
// ["lastName", "gender", "password", "about", "skills", "photoUrl"]