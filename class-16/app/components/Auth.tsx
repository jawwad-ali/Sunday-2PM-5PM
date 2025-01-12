"use client";
import React, { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";
const Auth = () => {
	const email = useRef<HTMLInputElement>(null);
	const router = useRouter();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		const emailResponse = email?.current?.value;
		console.log("emailREsponse", emailResponse);
		e.preventDefault();
		const url = await fetch("/api/auth", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email: emailResponse }),
		});

		// Receving Response from API
		const data = await url.json();

		if (data.redirectUrl) {
			router.push(data.redirectUrl);
		}

		console.log("data", data);
	};

	return (
		<div className='container mx-auto'>
			<form onSubmit={handleSubmit}>
				<input
					ref={email}
					placeholder='Enter Email'
					className='py-2 px-8 bg-gray-600 text-white'
				/>
				<button className='bg-blue-600 text-white rounded-lg py-2 px-5'>
					Login
				</button>
			</form>
		</div>
	);
};

export default Auth;
