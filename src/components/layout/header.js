import { Fragment } from "react";
import classes from "./header.module.css";
import image from "../../resources/foodTable.jpg";
import HeaderCartBtn from "./headerCartBtn";

const Header=(props) =>{
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>Flavours Restaurant</h1>
            <HeaderCartBtn/>
        </header>
        <div className={classes.mainImage}>
            <img src={image} alt="Table of delicious food"/> 
        </div> 
    </Fragment>
    )
}

export default Header;