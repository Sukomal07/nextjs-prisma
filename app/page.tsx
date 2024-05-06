import axios from "axios";

async function getUserDetails() {
  const response = await axios.get("http://localhost:3000/api/user")
  return response.data?.user;
}


export default async function Home() {
  const user = await getUserDetails()
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" flex flex-col gap-2 border-slate-700 border p-5 rounded-md">
        <h1 className="text-xl text-slate-600 font-semibold">{user.name}</h1>
        <h2 className="text-xl text-slate-600 font-semibold">{user.email}</h2>
      </div>
    </div>
  );
}
