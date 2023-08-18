import { User } from "@/app/components/User.component";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

const getData = async () => {
  //return { message: "mi sesion" };
  const res = await fetch('http://localhost:3000/api/session')
  return res.json()
};

export default async function PageClient() {
  const data = await getData();
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <>
      <h1>Server Session</h1>
      <hr />
      <pre>{JSON.stringify(session)}</pre>
      <hr />
      <User />
      <hr />
      <h1>LLamada a Api con Fetch Session</h1>
      <hr />
      <pre>{JSON.stringify(data)}</pre>
    </>
  );
}
