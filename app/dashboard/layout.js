import NavBar from "../components/NavBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-full w-full">
      <NavBar />
      <div id="cuerpo_dashboard" className="bg-amber-50 h-full">     
          {children}
      </div>
    </div>
  );
}
