import "bootstrap/dist/css/bootstrap.css";
import SideBarKiri from "../components/SideBarKiri";
import "./globals.css";
import NavigasiBar from "../components/NavigasiBar";

export const metadata = {
  title: "Santrify",
  description: "Dashboard for Islamic Boarding School ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      </head>
      <body>
        <div className="sidebarLayout">
          <SideBarKiri />
          <NavigasiBar/>
          {children}
        </div>
      </body>
    </html>
  );
}
