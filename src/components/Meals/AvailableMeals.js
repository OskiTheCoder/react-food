import React from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Rainbow Roll',
    description: 'Avocado, cucumber, and cabbage.',
    price: 12.99,
  },
  {
    id: 'm2',
    name: 'Garden Roll',
    description: 'Cucumber, tomato, and carrot',
    price: 12.99,
  },
  {
    id: 'm3',
    name: 'Bento 1',
    description: '6 piece maki, miso soup, salad, and tempura.',
    price: 14.99,
  },
  {
    id: 'm4',
    name: 'Bento 2',
    description: 'Ramen, gyoza, and tempura',
    price: 14.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
