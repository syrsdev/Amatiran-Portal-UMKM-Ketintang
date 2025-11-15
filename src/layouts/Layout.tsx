import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="my-[50px]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
