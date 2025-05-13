/* eslint-disable @typescript-eslint/no-explicit-any */
import { connect } from "@/dbconfig/dbconfig";

import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

import bcrypt from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    console.log("Request body:", reqBody);

    // Check if required fields exist
    if (!username || !email || !password) {
      console.log("Missing fields:", { username, email, password });
      return NextResponse.json(
        { error: "Username, email and password are required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });
    if (user) {
      console.log("User already exists:", email);
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    console.log("Attempting to save user:", newUser);

    const savedUser = await newUser.save();
    console.log("User saved successfully:", savedUser);

    return NextResponse.json({
      message: "User created successfully",
      status: 201,
      savedUser,
    });
  } catch (error: any) {
    console.error("Full error:", error);
    console.error("Error stack:", error.stack);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
