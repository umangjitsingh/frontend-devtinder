import React, {useEffect} from 'react'
import axios from "axios";
import {BASE_URL} from "../utils/constants.js";


function Friends() {
	useEffect(()=>{
		getFriends()
	},[])

	async function getFriends(){
		try{
			const response =await axios.get(BASE_URL +"/user/friends",{withCredentials:true});
			console.log(response.data.data)
		}
		catch (e) {
			console.log(e.message)
		}
	}

	return (
		<div>Friends</div>
	)
}

export default Friends
