import SideBarKiri from "../components/SideBarKiri";
export const metadata = {
  title: "Santrify",
  description: "management dashboard for Islamic Boarding School ",
};

export default function Home() {
  return (
    <>
      <div>
        <h1>Main Page</h1>
      </div>

      <SideBarKiri />
    </>
  );
}
