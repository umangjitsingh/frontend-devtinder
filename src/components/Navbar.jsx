



function Navbar() {
	return (
		<div className="  px-2 py-1 border-neutral-700 border-b-[1px] ">
			<div className="navbar bg-base-100 shadow-sm  ">
				<div className="flex-1">
					<a className="btn btn-ghost text-2xl text-info font-vig">
						DevTinder <sup className="text-lg ">..💬</sup></a>
				</div>
				<div className="pr-4   ">
					<div className="dropdown dropdown-end">
						<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
							<div className="w-16 rounded-full  ">
								<img
									alt="Tailwind CSS Navbar component"
									src="https://imgs.search.brave.com/QazHRm9TPbRSPuxFFbcE74K5z7vkA9ipylHW2mBhg8w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTg2/OTE2Mi5qcGc" />
							</div>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
							<li>
								<a className="justify-between">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<li><a>Settings</a></li>
							<li><a>Logout</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>


	);
}

export default Navbar;