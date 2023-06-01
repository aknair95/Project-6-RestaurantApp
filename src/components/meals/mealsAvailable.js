import Card from "../UI/card";
import classes from "./mealsAvailable.module.css";
import MealItem from "./mealItem/mealItem";

const MealsAvailable = (props) => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {
           props.mealsAvailable.map((item) => {
            return (
              <MealItem
                key={Math.random()}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                qty={item.qty}
              />
            )})}
        </ul>
      </Card>
    </section>
  );
};

export default MealsAvailable;
