import dynamic from "next/dynamic";

const DynamicNavbar = dynamic(() => import("@components/Navbar"), {
  ssr: false,
});

const DynamicFooter = dynamic(() => import("@components/Footer"), {
  ssr: true,
});

const Layout = ({ children }) => {
  return (
    <>
      <DynamicNavbar />
      <main className="utama">{children}</main>
      <DynamicFooter />

      <style global jsx>{`
        .utama {
          min-height: calc(100vh - 80px - 81.6px);
        }
      `}</style>
    </>
  );
};

export default Layout;
