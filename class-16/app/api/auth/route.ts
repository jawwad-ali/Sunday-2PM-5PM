import { NextRequest, NextResponse } from "next/server";
// ali@gmail.com

// Method for only console.log() the response

// export async function POST(request: NextRequest) {
// 	const body = await request.json(); // IN
// 	console.log("body", body);
// 	if (body.email == "ali@gmail.com") {
// 		console.log("You are loggedIN");
// 	} else {
// 		console.log("Invalid Creds");
// 	}

// 	return NextResponse.json({ body });
// }

// Method to redirect the user based on the API response. (Check redirectURL key in the Response obj)

export async function POST(request: NextRequest) {
	const body = await request.json();
	try {
		if (body.email == "daniyal@gmail.com" || body.email == "ameen@gmail.com") {
			return NextResponse.json({
				message: "Valid User",
				redirectUrl: "/admin",
			});
		} else {
			return NextResponse.json({
				message: "Valid User",
				redirectUrl: "/student",
			});
		}
	} catch (err: any) {
		return NextResponse.json({
			message: "Invalid User",
		});
	}
}
