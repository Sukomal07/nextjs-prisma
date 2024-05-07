"use server";

import client from "@/db/db";
import { NextResponse } from "next/server";

export async function signup(name: string, email: string, password: string) {
  try {
    const user = await client.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
    return NextResponse.json({ message: "User created successfully", user });
  } catch (error) {
    console.log(error);
  }
}
