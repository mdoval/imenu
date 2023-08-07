import BotonLogin from "./components/BotonLogin";
import UserProfile from "./components/UserProfile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <h1 className="font-semibold text-3xl">Bienvenido a  iMenu</h1>
        <BotonLogin />
      </div>
    </main>
  );
}
