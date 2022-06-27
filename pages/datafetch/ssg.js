const SsgView = ({ data }) => {
  console.log(
    "=== SSG https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood ==="
  );
  console.log(data);

  return (
    <div className="mainSection">
      <h1 style={{ textAlign: "center" }}>Static Site Generation</h1>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  );
  const data = await res.json();

  return {
    props: {
      data: data.meals,
    },
  };
}

export default SsgView;
