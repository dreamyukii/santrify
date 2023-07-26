import "bootstrap/dist/css/bootstrap.css";
import "../../styles/logregister.css";
export const metadata = {
  title: "Santrify Register",
  description: "Register Page",
};

export default function RootLayout({ children }) {
 return (
    <html lang="en">
        <link rel="icon" href="/logo.png" sizes="any" />
      <body>{children}</body>
    </html>
  )
}
