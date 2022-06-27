import Head from "next/head";
import Link from "next/link";

const DataFetchView = () => {
  return (
    <div className="mainSection">
      <Head>
        <title>Data Fetching</title>
      </Head>

      <div
        style={{
          padding: "80px 0 80px 0",
        }}
      >
        <h1>Data fetching in Next.js</h1>

        <ul>
          <li>
            <Link
              href={{
                pathname: `/datafetch/ssr`,
              }}
              as={`/datafetch/ssr`}
            >
              <a style={{ color: "blue" }}>Server-Side Rendering</a>
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: `/datafetch/ssg`,
              }}
              as={`/datafetch/ssg`}
            >
              <a style={{ color: "blue" }}>Static Site Generation</a>
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: `/datafetch/isr`,
              }}
              as={`/datafetch/isr`}
            >
              <a style={{ color: "blue" }}>Incremental Static Regeneration</a>
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: `/datafetch/csr`,
              }}
              as={`/datafetch/csr`}
            >
              <a style={{ color: "blue" }}>Client-Side Rendering</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DataFetchView;
