import "bootstrap/dist/css/bootstrap.css";
export const metadata = {
  title: "Santrify Register",
  description: "Register Page",
};

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
