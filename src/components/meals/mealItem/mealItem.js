import classes from "./mealItem.module.css";
import MealItemForm from "./mealItemForm";

const MealItem=(props) =>{
    return(
        <li className={classes.meal}>
            <div >
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{`Rs ${props.price}`}</div>
            </div>
            <div><MealItemForm id={props.id} item={props}/></div>               
        </li>
    )
}

export default MealItem;