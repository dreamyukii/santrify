import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import SideBarKiri from "../components/Navigasi/SideBarKiri";
import NavigasiBar from "../components/Navigasi/NavigasiBar";

export const metadata = {
  title: "Santrify",
  description: "Dashboard for Islamic Boarding School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div className="sidebarLayout">
          <SideBarKiri />
          <div style={{ width: "100%" }}>
            <NavigasiBar />
            <div style={{padding:10}}> {children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
