import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hola iMenu</h1>
      <Link href="/api/auth/signin">Ingresar</Link>
    </main>
  );
}
