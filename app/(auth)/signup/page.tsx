"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface User {
    name: string,
    email: string,
    password: string
}
export default function Signup() {
    const router = useRouter()
    const [data, setData] = useState<User>({
        name: '',
        email: '',
        password: ''
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const res = await axios.post("http://localhost:3000/api/user/signup", data)
        console.log(res.data);
        setData({
            name: '',
            email: '',
            password: ''
        })
        router.push("/")
    }

    return (
        <div className='h-full'>
            <div className='flex flex-col gap-8 items-center justify-center h-full'>
                <div className='flex flex-col gap-2 text-center'>
                    <h1 className='text-4xl font-extrabold'>
                        Create an account
                    </h1>
                    <p className='text-slate-500 font-semibold'>
                        Already have an account?
                        <Link className="pl-2 underline" href={'/signin'}>
                            Sign in
                        </Link>
                    </p>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-[350px]'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name" className="block text-xl text-slate-600 font-semibold">Name</label>
                        <input type="text" name="name" id="name" value={data.name} onChange={(e) => handleChange(e)} placeholder='Enter your name' autoComplete="off" className="bg-gray-50 border-2 border-slate-500 text-slate-700 rounded-md outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email" className="block text-xl text-slate-600 font-semibold">Email</label>
                        <input type="email" name="email" id="email" value={data.email} onChange={(e) => handleChange(e)} placeholder='m@example.com' autoComplete="off" className="bg-gray-50 border-2 border-slate-500 text-slate-700 rounded-md outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="password" className="block text-xl text-slate-600 font-semibold">Password</label>
                        <input type="password" name="password" id="password" value={data.password} onChange={(e) => handleChange(e)} placeholder='12XXX6' autoComplete="off" className="bg-gray-50 border-2 border-slate-500 text-slate-700 rounded-md outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                    </div>
                    <button type='submit' className="w-full text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-md text-sm  py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign up</button>
                </form>
            </div>
        </div>
    );
}
