import { NextRequest, NextResponse } from "next/server";

const ShoppingList = [
	{
		name: "Shoes",
		description: "my shoe desc",
	},
];

export function GET() {
	return NextResponse.json(ShoppingList);
}

export async function POST(request: NextRequest) {
	const body = await request.json(); // In
	ShoppingList.push(body);
	console.log("requ from client", body);
	return NextResponse.json(body); //Out
}
