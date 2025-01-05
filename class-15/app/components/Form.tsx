"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const Form = () => {
	const router = useRouter();

	const [name, setName] = useState("");
	const [description, setDesc] = useState("");

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const res = await fetch("/api/hello", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, description }),
		});
		router.refresh();
		await res.json();
	};
	return (
		<div>
			<div>
				<form onSubmit={handleSubmit}>
					<input
						value={name}
						onChange={(event) => setName(event.target.value)}
						placeholder='Shopping List'
						type='text'
						className='border-blue-600 text-black rounded'
					/>
					<br /> <br />
					<input
						value={description}
						onChange={(event) => setDesc(event.target.value)}
						placeholder='Shopping desc'
						type='text'
						className='border-blue-600 text-black rounded'
					/>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</div>
	);
};

export default Form;
