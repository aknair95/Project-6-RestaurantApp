import classes from "./mealsAvailable.module.css";

const mealsData=[
    {
        Id:"1",
        Name: "Masala Dosa",
        Description: "South special",
        Price: "Rs 80"
    },
    {
        Id:"2",
        Name: "Chole Bhature",
        Description: "Delhi special",
        Price: "Rs 150"
    },
    {
        Name: "Chole Kulche",
        Description: "North special",
        Price: "Rs 120"
    }
]

const MealsAvailable=() =>{
    return(
        <section className={classes.meals}>
            <ul>
            { 
                mealsData.map((item) =>{
                    return <li>{item.Name}</li>;         
            })}
            </ul>
        </section>
    )
}
export default MealsAvailable;