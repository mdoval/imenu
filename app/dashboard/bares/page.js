import BotonNuevoBar from "@/app/components/Buttons/BotonNuevoBar";
import { BarCard } from "@/app/components/Cards/BarCard";
import { getData } from "@/helpers/getData";

export default async function BaresPage() {
  const { bares } = await getData("http://localhost:3000/api/bares", {
    cache: "no-store",
  });
  console.log(bares);

  if (bares.length === 0) {
    return (
      <div className="w-full">
        <h1>Mis Bares</h1>
        <hr />
        <div className="flex flex-col items-center m-5">
          <div>
            <span className="text-2xl">Usted no posee Bares aun, desea crear uno?</span>
          </div>
          <div className="p-2">
            <BotonNuevoBar />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full">
        <h1>Mis Bares</h1>
        <hr />
        {bares.map((bar) => {
          return <BarCard id={bar.id} nombre={bar.nombre} urlLogo={bar.logo} />;
        })}
      </div>
    );
  }
}
