import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Vegan Sushi, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection and enjoy a delicious
        plant based lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by exceptional chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
