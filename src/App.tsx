import { Outlet } from "react-router";
import SiteHeader from "./components/site-components/site-header";
import SiteSidebar from "./components/site-components/site-sidebar";

function App() {
  return (
    <>
      <SiteHeader />
      <div className="flex">
        <SiteSidebar />
        <div className="p-4 h-[200vh]">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
