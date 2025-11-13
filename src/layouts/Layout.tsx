import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="my-[50px]">{children}</main>
    </>
  );
};

export default Layout;
