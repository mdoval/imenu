import NavBar from "../components/NavBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-full w-full">
      <NavBar />
      <div id="cuerpo_dashboard" className="bg-amber-50 h-full flex flex-col items-center p-10">     
          {children}
      </div>
    </div>
  );
}
