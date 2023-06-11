import SideBarKiri from "../components/SideBarKiri";
import "./globals.css";

export const metadata = {
  title: "Santrify",
  description: "management dashboard for Islamic Boarding School ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div className="sidebarLayout">
          <SideBarKiri />
          {children}
        </div>
      </body>
    </html>
  );
}
