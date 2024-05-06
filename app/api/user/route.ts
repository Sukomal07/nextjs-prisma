import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = new PrismaClient();
    const user = await client.user.findFirst();
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
