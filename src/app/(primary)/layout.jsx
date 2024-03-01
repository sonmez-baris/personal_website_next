import Image from "next/image";
import Sidebar from "@/components/layout/sidebar";
import TopBar from "@/components/layout/topbar";
import Footer from "@/components/layout/footer";

const MainLayout = ({ children }) => {
  return(
    <main className="w-full md:w-160 h-full mx-auto">
      <Sidebar />
      <div className="w-full md:w-150 mx-auto border-l-2 border-r-2 border-gray-200 dark:border-gray-700 max-h overflow-y-auto">
        <TopBar msg={'Bugün onların olsun, ama uğrunda çok uğraştığım gelecek benimdir!'} />
        {children}
        <Footer />
      </div>
    </main>
  )
};

export default MainLayout;