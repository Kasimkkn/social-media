import { Outlet } from "react-router-dom";

import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/TopBar";
import Bottombar from "@/components/shared/BottomBar";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  )
}

export default RootLayout
