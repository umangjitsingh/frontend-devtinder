import React from 'react'


function Footer() {
	return (
		<footer className="footer sm:footer-horizontal footer-center bg-transparent text-[12px] p-3 absolute
		bottom-0">
			<aside>
				<p className="text-neutral-400">Copyright
					© {new Date().getFullYear()} - All right
					reserved by
					<span className="text-zinc-500 text-[15px] pl-1 bg-zinc-950 font-bold font-vig tracking-wide">TeamDevtinder</span>.
				</p>
			</aside>
		</footer>
	)
}

export default Footer
