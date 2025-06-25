import {BASE_URL} from "../utils/constants.js";
import axios from "axios";
import {useEffect} from "react";
import {addUser} from "../utils/userSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import Layout from "../Layout.jsx";



function Body() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userData = useSelector((store) => store.user);



	useEffect(() => {
		fetchUser()
	}, []);

	const fetchUser = async () => {
		if (userData) {
			return;
		}
		try {
			const response = await axios.get(BASE_URL + "/profile/view", {withCredentials: true});
			dispatch(addUser(response.data))

		} catch (e) {
			if (e.status === 401) {
				navigate('/login')
			}
			console.error(e.message)
		}
	}

	return (
		<Layout/>
	);
}

export default Body;