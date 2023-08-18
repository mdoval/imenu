import { BarCard } from "@/app/components/Cards/BarCard";
import { getData } from "@/helpers/getData"

export default async function BaresPage() {
  const { bares } = await getData("http://localhost:3000/api/bares", {cache: "no-store"});
  console.log(bares)
  return (
    <div className="w-full">
      <h1>Mis Bares</h1>
      <hr />
      {bares.map((bar) => {
        return(<BarCard id={bar.id} nombre={bar.nombre} urlLogo={bar.logo} />)
      })}      
    </div>
  );
}