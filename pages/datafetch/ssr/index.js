import Link from "next/link";

const SsrView = (props) => {
  console.log(
    "=== SSR https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood ==="
  );
  console.log(props);

  return (
    <div className="mainSection">
      <div
        style={{
          padding: "80px 0 80px 0",
        }}
      >
        <h1 style={{ marginTop: "0" }}>Server-Side Rendering</h1>
        <ul>
          {props.data.map((meal) => {
            return (
              <li key={meal.idMeal}>
                <Link
                  href={{
                    pathname: `/datafetch/ssr/${meal.idMeal}`,
                  }}
                  as={`/datafetch/ssr/${meal.idMeal}`}
                >
                  <a style={{ color: "blue" }}>{meal.strMeal}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  );
  const data = await res.json();

  return {
    props: { data: data.meals },
  };
}

export default SsrView;
