import React, {useState} from 'react'
import axios from "axios";
import {useDispatch} from "react-redux";
import {addUser} from "../utils/userSlice.js";
import {useNavigate} from "react-router";
import {BASE_URL} from "../utils/constants.js";


function RegisterForm() {

	const [formInput, setFormInput] = useState({
		emailId : "",
		password: ""
	});
	const [error,setError]=useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();


	function handleChange(e) {
		setFormInput((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value
		}))
	}

	async function handleLogin(e) {
		try {

			e.preventDefault();
			const response = await axios.post(BASE_URL+"/login" , {
					emailId : formInput.emailId,
					password: formInput.password
				},
				{withCredentials: true});

			dispatch(addUser(response.data));
			return navigate("/")
		} catch (e) {
			setError(e?.response?.data?.message)
			// console.log(e?.response?.data)

		}


	}

	return (

		<fieldset className="fieldset bg-zinc-900 border-zinc-400 rounded-box w-sm border p-8">
			<legend className="fieldset-legend text-2xl uppercase text-zinc-300  font-bold">Login</legend>
			<form>
				<label className="label">Email Id</label>
				<input onChange={handleChange}
				       type="email" name="emailId"
				       value={formInput.emailId}
				       placeholder="Email"
				       className="input"
				/>

				<label className="label">Password</label>
				<input onChange={handleChange}
				       type="password"
				       name="password"
				       value={formInput.password}
				       className="input"
				       placeholder="Password"/>

				{error && <p className="text-red-600 pt-2 pb-1">{error}</p>}
				<button
					onClick={handleLogin}
					type="submit"
					className="btn bg-gray-700 hover:bg-gray-600 mt-4">Login
				</button>
			</form>

		</fieldset>
	)

}

export default RegisterForm;
