import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, company, message } = body;

        // In a real scenario, you would send an email here using Nodemailer, Resend, etc.
        // Or store it in a database.
        console.log("Contact Form Submission:", { name, email, company, message });

        return NextResponse.json({ message: "Success" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
