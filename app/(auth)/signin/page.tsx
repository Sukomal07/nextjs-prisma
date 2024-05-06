"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface User {
    email: string,
    password: string
}

export default function Signin() {
    const router = useRouter()
    const [data, setData] = useState<User>({
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
        const res = await axios.post("http://localhost:3000/api/user/signin", data)
        console.log(res.data);
        setData({
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
                        Login in your account
                    </h1>
                    <p className='text-slate-500 font-semibold'>
                        Don&apos;t have an account?
                        <Link className="pl-2 underline" href={'/signup'}>
                            Sign up
                        </Link>
                    </p>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-[350px]'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email" className="block text-xl text-slate-600 font-semibold">Email</label>
                        <input type="email" name="email" id="email" onChange={(e) => handleChange(e)} value={data.email} placeholder='m@example.com' autoComplete="off" className="bg-gray-50 border-2 border-slate-500 text-slate-700 rounded-md outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="password" className="block text-xl text-slate-600 font-semibold">Password</label>
                        <input type="password" name="password" id="password" onChange={(e) => handleChange(e)} value={data.password} placeholder='12XXX6' autoComplete="off" className="bg-gray-50 border-2 border-slate-500 text-slate-700 rounded-md outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                    </div>
                    <button type='submit' className="w-full text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-md text-sm  py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign in</button>
                </form>
            </div>
        </div>
    )
}