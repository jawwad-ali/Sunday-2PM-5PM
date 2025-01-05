import Form from "./components/Form";

export default async function Home() {
	const url = await fetch("http://localhost:3000/api/hello", {
		cache: "no-store",
	});
	const res = await url.json();
	console.log(res);

	return (
		<>
			<Form />
			{res.map((list: { name: string; description: string }, index: number) => (
				<h1 key={index}>
					{list.name} {list.description}{" "}
				</h1>
			))}
		</>
	);
}
