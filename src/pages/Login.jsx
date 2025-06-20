import React from 'react';
import RegisterForm from "../components/RegisterForm.jsx";



function Login() {
	return (
			<div className=" h-[calc(100%-22%)] flex items-center justify-center">
				<div className=" rounded-md bg-gradient-to-br from-zinc-950 to-zinc-700
				 border-zinc-400  shadow-[0_0_15px_rgba(0,44,28,0.3)] "><RegisterForm/></div>
			</div>
	);
}

export default Login;



