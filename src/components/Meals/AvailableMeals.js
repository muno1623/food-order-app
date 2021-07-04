import React, { useState } from "react";
import styles from "./AvailableMeals.module.css";
import MealsList from "./MealsList";
import Card from "../UI/Card";
import { useEffect } from "react";

const AvailableMeals = () => {
  const [isMeals, seIsMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);

      const response = await fetch(
        "https://food-order-app-7be98-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      const loadMeals = [];
      for (const key in data) {
        loadMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      seIsMeals(loadMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setIsError(error.message);
      console.log(error.message)
    });
  }, []);

  let mealsList = isMeals.map((meal) => {
    return <MealsList id={meal.id} key={meal.id} item={meal}></MealsList>;
  });
  let content = mealsList;
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (isError != null) {
    content = <p>{isError}</p>;
  }

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{content}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
