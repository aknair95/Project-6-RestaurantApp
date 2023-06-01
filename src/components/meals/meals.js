import { Fragment } from "react";
import MealsAvailable from "./mealsAvailable";
import MealsSummary from "./mealsSummary";

const Meals=(props) =>{
    return(
        <Fragment>
            <MealsSummary/>
            <MealsAvailable mealsAvailable={props.mealsAvailable}/>
        </Fragment>
    )
}

export default Meals;