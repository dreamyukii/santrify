import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import NavigasiBar from "@/components/NavigasiBar";
import SideBarKiri from "@/components/SideBarKiri";

export default function Home() {
  return (
    <>
      <header>
        <NavigasiBar/>
      </header>
      <div>
        <SideBarKiri/>
      </div>
    </>
  );
}
