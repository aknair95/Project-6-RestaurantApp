import { Fragment } from "react";
import MealsAvailable from "./mealsAvailable";
import MealsSummary from "./mealsSummary";

const Meals=() =>{
    return(
        <Fragment>
            <MealsSummary/>
            <MealsAvailable/>
        </Fragment>
    )
}

export default Meals;