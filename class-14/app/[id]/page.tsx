const DynamicBook = async (props: any) => {
	// const url = await fetch(`https://simple-books-api.glitch.me/books/8342398432489`);
	const url = await fetch(
		`https://simple-books-api.glitch.me/books/${props.params.id}`
	);
	const res = await url.json();
	console.log("SingleBookREsponse", res);

	return (
		<h1 className='pl-5 text-5xl'>
			{props.params.id} <br />
			{res.name} <br />
			{res.author} <br />
		</h1>
	);
};

export default DynamicBook;
