import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req: NextRequest) {
  try {
    const client = new PrismaClient();
    const body = await req.json();
    const user = await client.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });
    if (user) {
      return NextResponse.json({ message: "User login successfully", user });
    } else {
      return NextResponse.json({ message: "User login failed", user });
    }
  } catch (error) {
    console.log(error);
  }
}
