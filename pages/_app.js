import "@styles/globals.css";
import Layout from "@components/Layout";

function MyApp({ Component, pageProps, ...appProps }) {
  const usingLayout = ["/404"].includes(appProps.router.pathname);
  return (
    <>
      {usingLayout ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
