import Input from "../../UI/input";
import classes from "./mealItemForm.module.css";

const MealItemForm=() =>{
    const onClickBtnHandler=(e) =>{

    }
    return(
        <form className={classes.form}>
             <div>
                <Input label="QTY." input={{
                    id: "qty"+ Math.random(),
                    type: "number",
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}/>
            </div>
            <button onClick={onClickBtnHandler}>+ ADD</button>
        </form>   
    )
}

export default MealItemForm;