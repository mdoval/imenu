import UserProfile from "./components/UserProfile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="bg-red-200 p-2">Bienvenido a  iMenu</h1>
        <UserProfile />
      </div>
    </main>
  );
}
