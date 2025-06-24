function UserCard({ singleUser }) {
	return (
		<div className="relative bg-zinc-900 text-white rounded-xl w-88 h-[500px] border border-zinc-800 shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
			<img
				src={singleUser.photoUrl}
				alt={`${singleUser.firstName} ${singleUser.lastName}`}
				className="w-full h-[60%] object-cover opacity-90"
			/>

			<div className=" flex flex-col justify-between h-[40%]">
				<div className="text-center">
					<h2 className="text-lg font-medium text-white capitalize">
						{singleUser.firstName} <span className="text-indigo-400">{singleUser.lastName}</span>
					</h2>
					<p className="text-xs text-orange-400 ">
						{singleUser.age} • {singleUser.gender}
					</p>
					<p className="text-xs text-zinc-400 mt-2 line-clamp-2">{singleUser.about}</p>
				</div>

				<div className=" absolute w-full top-[77%] flex flex-wrap justify-evenly   mt-2">
					{singleUser.skills.map((skill, idx) => (
						<span
							key={idx}
							className="bg-zinc-800 text-indigo-300 text-xs px-3 py-1 rounded-xl border border-indigo-500/20"
						>
							{skill}
						</span>
					))}
				</div>
			</div>

			<div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-4">
				<button className="px-10 cursor-pointer py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-3xl text-base transition">
					Pass
				</button>
				<button className="flex cursor-pointer items-center justify-evenly gap-2 px-6 py-2 bg-fuchsia-700 hover:bg-purple-700 text-white rounded-3xl text-base transition">
					<span>Like</span> <span>👍</span>
				</button>
			</div>
		</div>
	);
}
export default UserCard;