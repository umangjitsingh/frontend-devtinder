import React, {useEffect} from 'react'
import axios from "axios";
import {BASE_URL} from "../utils/constants.js";
import {useDispatch, useSelector} from "react-redux";
import {addFriend} from "../utils/friendSlice.js";
import UserCard from "./UserCard.jsx";


function Friends() {
	const dispatch= useDispatch();
	const friends=useSelector((store)=>store.friend)


	useEffect(()=>{
		getFriends()
	},[])

	async function getFriends(){
		try{
			const response =await axios.get(BASE_URL +"/user/friends",{withCredentials:true});

			dispatch(addFriend(response?.data?.data))

		}
		catch (e) {
			console.log(e.message)
		}
	}

	const bigUi={
		s:2.0,
		p:"30px"
	}
	return (
		<div className="flex  gap-2 justify-center items-center flex-wrap">
			{friends?.map((f) => (<div className="w-[33%]"><UserCard singleUser={f} key={f._id} size={0.6} showUi={false} biggerSize={bigUi}/></div>

			))}
		</div>
	);
}

export default Friends
