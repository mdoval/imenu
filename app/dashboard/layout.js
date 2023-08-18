import NavBar from "../components/NavBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-full w-full">
      <NavBar />
      <div className="DashboardBody">     
          {children}
      </div>
    </div>
  );
}
