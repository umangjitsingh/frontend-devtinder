import React, {useEffect} from 'react'
import axios from "axios";
import {BASE_URL} from "../utils/constants.js";
import {useDispatch, useSelector} from "react-redux";
import {addRequest} from "../utils/requestsSlice.js";


function Requests() {

	const dispatch = useDispatch();
	const IncomingRequest = useSelector((store) => store.request);
	useEffect(() => {
		fetchRequests()
	}, []);

	const fetchRequests = async () => {
		try {
			const response = await axios.get(BASE_URL + "/user/requests/incoming", {withCredentials: true});
			const incomingRequestsData = response?.data?.requests;
			console.log(incomingRequestsData)

			dispatch(addRequest(incomingRequestsData));

		} catch (e) {
			console.log(e.message)
		}
	}
	if (!IncomingRequest) {
		return <h1 className="text-center text-3xl pt-18 pb-28">No
			new Friend
			Requests.<span className="text-4xl pl-4">😔 </span>
		</h1>
	}
	return (
		<div className="w-full h-[calc(100vh-22%)] ">
			<h1 className="text-base pl-8 pt-6">You
				have {IncomingRequest.length} new friend
				requests.</h1>


			{
				IncomingRequest &&
				<div className=" pt-4 w-[48%]  mx-auto flex gap-8 flex-col">
					{IncomingRequest.map((curReq) =>
						<div key={curReq._id} className=" flex gap-8">
							<div
								className="h-36 w-36 border border-gray-900 mb-1 bg-cover rounded-md relative overflow-hidden"
								style={{backgroundImage: `url(${curReq.fromUserId.photoUrl})`}}>
								<div className="absolute bottom-0 left-0 right-0 h-[69%] bg-gradient-to-t from-zinc-950 to-transparent z-10"/>
								<h2 className="absolute bottom-2 z-20  text-zinc-400 text-sm  font-semibold capitalize  leading-4 font-mont  left-[14%]">
									{curReq.fromUserId.firstName + " "}
									{curReq.fromUserId.lastName}
								</h2>
							</div>
							<div className="">
								<h2 className="text-zinc-300 pt-6 text-base leading-4">{curReq.fromUserId.about}</h2>
								<div className="pt-4 flex gap-2">
									<button className="btn btn-sm btn-soft  btn-warning">Reject</button>
									<button className="btn btn-soft btn-sm btn-secondary ">Accept</button>
								</div>

							</div>
						</div>
					)
					}
				</div>
			}

		</div>
	)
}

export default Requests
