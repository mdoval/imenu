import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export default async function PageServerSide() {
    const session = await getServerSession(authOptions);
    console.log(session);

    return <>
    <h1>Sesion en Server Side</h1>
    <hr />
    <pre>{JSON.stringify(session)}</pre>
    </>
}