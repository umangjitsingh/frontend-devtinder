import {useEffect, useState} from 'react';
import {BASE_URL} from "../utils/constants.js";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {addFeed} from "../utils/feedSlice.js";
import UserCard from "../components/UserCard.jsx";


function Feed() {
	const dispatch = useDispatch();
	const feed = useSelector((store) => store.feed)

	const [error, setError] = useState("")

	const getFeed = async () => {
		if (feed) return;
		try {
			const response = await axios.get(BASE_URL + "/feed", {withCredentials: true})
			dispatch(addFeed(response.data.message))

		} catch (e) {
			console.log(e);
			setError(e.message)
		}
	}

	useEffect(() => {
		getFeed()
	}, []);
	if (error) {
		return <div>{error}</div>
	}
	return (<div className="  flex items-center justify-center bg-zinc-900">
			{
				feed ? <UserCard singleUser={feed[0]}/> :
					<h1>No Friends to suggest.. </h1>
			}
		</div>
	);
}

export default Feed;