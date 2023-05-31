import Input from "../../UI/input";
import classes from "./mealItemForm.module.css";
import CartContext from "../../../store/cartContext";
import { useContext } from "react";

const MealItemForm=(props) =>{
    const cartItemCtx=useContext(CartContext);
    const onClickAddBtnHandler=(e) =>{
        e.preventDefault();
        const quantity=document.getElementById("qty"+props.id).value;       // to get value of quantity by DOM id.
        cartItemCtx.addItem({...props.item,qty: quantity});                 //adding quantity to items data

    }
    return(
        <form className={classes.form}>
             <div>
                <Input label="QTY." input={{
                    id: "qty"+props.id,
                    type: "number",
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}/>
            </div>
            <button onClick={onClickAddBtnHandler}>+ ADD</button>
        </form>   
    )
}

export default MealItemForm;