import { useState, useEffect } from "react";

const CsrView = () => {
  const [meals, setMeals] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!meals) return <p>No data found</p>;

  console.log(
    "=== CSR https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood ==="
  );
  console.log(meals);

  return (
    <div className="mainSection">
      <div
        style={{
          padding: "80px 0 80px 0",
        }}
      >
        <h1>List Meal:</h1>
        <ul>
          {meals.meals.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CsrView;
