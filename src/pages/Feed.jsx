import {useEffect} from 'react';
import {BASE_URL} from "../utils/constants.js";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {addFeed} from "../utils/feedSlice.js";
import UserCard from "../components/UserCard.jsx";


function Feed() {
	const dispatch = useDispatch();
	const feed = useSelector((store) => store.feed)



	const getFeed = async () => {
		if (feed) return;
		try {
			const response = await axios.get(BASE_URL + "/feed", {withCredentials: true})
			dispatch(addFeed(response?.data?.message))

		} catch (e) {
			console.log(e);

		}
	}

	useEffect(() => {
		getFeed()
	}, []);
	if (!feed) {
		return <div>No new feeds</div>
	}
	return feed && (
				<div className=" max-h-[78%] flex flex-col items-center bg-zinc-900 pt-6 ">
<h1 className=" absolute text-lg font-medium tracking-wide font-rob text-zinc-300 top-20 mt-4 ">Suggestions..</h1>
					<UserCard singleUser={feed[0]} size={0.88}/>
				</div>)
}

export default Feed;