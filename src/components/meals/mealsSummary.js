
import "./mealsSummary.module.css";
import classes from "./mealsSummary.module.css";

const MealsSummary=() =>{
    return(
    <section className={classes.summary}>
            <h2>Delicious Food</h2>
            <h2>Delivered To Your Doorstep </h2>
            <p>
                Choose your favorite meal from our broad section of 
                delicious meals and enjoy lunch or dinner at home.
            </p>
            <p>
                All our dishes are cooked with high quality ingredients, just in time by experienced chefs!
            </p>
        </section>
    )
}

export default MealsSummary;