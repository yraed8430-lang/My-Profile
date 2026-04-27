import { Outlet } from "react-router-dom";
import Footer from "../cummon/Footer";
import Navbar from "../cummon/Navbar";

export default function Layout() {
  return (
    <div className="pt-16">
        <Navbar />
            <Outlet/>
        <Footer />
    </div>
  )
}
