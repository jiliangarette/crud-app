import { Outlet } from "react-router-dom";
import NavbarLayout from "./NavbarLayout";
import FooterLayout from "./FooterLayout";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarLayout />
      <main className="flex-1">
        <Outlet />
      </main>
      <FooterLayout />
    </div>
  );
};

export default RootLayout;
