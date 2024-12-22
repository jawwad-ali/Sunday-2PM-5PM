import Link from "next/link";
import { client } from "@/sanity/lib/client";

export default async function Home() {
	const url = await fetch("https://simple-books-api.glitch.me/books");
	const res = await url.json();
	console.log(res);


	// Sanity CMS
	// GROQ query language
	const query = `*[ _type == "pet"]`;

	const pet = await client.fetch(query);
	console.log(pet);
	
	return (
		<main>
			{res.map((book: any, index: number) => (
				<div key={index}>
					<Link href={`${book.id}`}>
						<h1 className='text-6xl'>
							{book.id} &nbsp; &nbsp;
							{book.name}
						</h1>
					</Link>
				</div>
			))}
		</main>
	);
}

// https://jsonplaceholder.typicode.com/todos
