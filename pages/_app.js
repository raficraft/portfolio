import Layout from "../engine/component/Layout/Layout";
import ScrollProvider from "../engine/context/ScrollProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ScrollProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ScrollProvider>
    </>
  );
}

export default MyApp;
