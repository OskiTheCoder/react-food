import React from "react";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Rainbow Roll",
    description: "Avocado, cucumber, and cabbage.",
    price: 12.99,
  },
  {
    id: "m2",
    name: "Garden Roll",
    description: "Cucumber, tomato, and carrot",
    price: 12.99,
  },
  {
    id: "m3",
    name: "Bento 1",
    description: "6 piece maki, miso soup, salad, and tempura.",
    price: 14.99,
  },
  {
    id: "m4",
    name: "Bento 2",
    description: "Ramen, gyoza, and tempura",
    price: 14.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
