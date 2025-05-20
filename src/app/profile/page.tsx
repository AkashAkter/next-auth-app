/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.error("Logout error:", error);
      toast.error("Logout failed");
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow">
        <h1 className="text-xl font-semibold text-center mb-4 text-gray-800">
          Profile
        </h1>
        <p className="text-center text-gray-600 mb-6">
          This is your profile page.
        </p>
        <h2 className="text-center text-gray-800 mb-4">
          {data === "nothing" ? (
            "Nothing"
          ) : (
            <Link href={`/profile/${data}`}>{data}</Link>
          )}
        </h2>
        <button
          onClick={logout}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
        >
          Logout
        </button>
        <button
          onClick={getUserDetails}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition"
        >
          Get User Details
        </button>
      </div>
    </div>
  );
}
