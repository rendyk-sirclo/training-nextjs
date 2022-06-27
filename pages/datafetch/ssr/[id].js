import Link from "next/link";

const DetailSsr = (props) => {
  console.log(
    `=== SSR https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.id} ===`
  );
  console.log(props);

  return (
    <div className="mainSection">
      <div
        style={{
          padding: "80px 0 80px 0",
        }}
      >
        <Link
          href={{
            pathname: `/datafetch/ssr`,
          }}
          as={`/datafetch/ssr`}
        >
          <a style={{ color: "blue" }}>🡐 List category</a>
        </Link>
        <pre>
          <code>{JSON.stringify(props.data, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await res.json();

  return {
    props: { data: data.meals, id },
  };
}

export default DetailSsr;
