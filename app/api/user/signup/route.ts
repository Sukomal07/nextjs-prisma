import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req: NextRequest) {
  try {
    const client = new PrismaClient();
    const body = await req.json();
    const user = await client.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });
    return NextResponse.json({ message: "User created successfully", user });
  } catch (error) {
    console.log(error);
  }
}
