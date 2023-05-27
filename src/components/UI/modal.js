import { Fragment } from "react";
import classes from "./modal.module.css";
import ReactDOM from "react-dom";

const BackdropModal=() =>{
    return <div className={classes.backdrop}/>
}

const OverlayModal=(props) =>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const Modal=(props) =>{
    const portalRef=document.getElementById("modals");
    return(
        <Fragment>
            {ReactDOM.createPortal(<BackdropModal/>,portalRef)}
            {ReactDOM.createPortal(<OverlayModal>{props.children}</OverlayModal>,portalRef)}
        </Fragment>
    )
}

export default Modal;