import client from '@/db/db'

async function getUserDetails() {
  try {
    const user = await client.user.findFirst();
    return {
      name: user?.name,
      email: user?.email
    }
  } catch (error) {
    console.log(error);
  }
}


export default async function Home() {
  const data = await getUserDetails()
  console.log(data)
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" flex flex-col gap-2 border-slate-700 border p-5 rounded-md">
        <h1 className="text-xl text-slate-600 font-semibold">{data?.name}</h1>
        <h2 className="text-xl text-slate-600 font-semibold">{data?.email}</h2>
      </div>
    </div>
  );
}
