import React, {Fragment} from "react";
import  classes from './ErrorModal.module.css'
import Card from "./Card";
import Button from "./Button";
import ReactDOM from "react-dom";

const Backdrop = (props) =>{
    return <div className={classes.backdrop} onClick={props.onConfirm}/>;
};

const   Modaloverlay =(props) =>{
    return(
    <Card className={classes.modal}>
    <header className={classes.header}>
        <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
        <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay!</Button>
    </footer>
    </Card>
    );
};

const ErrorModal = (props) =>{
    return(
        <Fragment>
            {ReactDOM.createPortal
            (<Backdrop onClick={props.onConfirm}/>,
             document.getElementById('backdrop-root')
             )};
             {ReactDOM.createPortal(
                <Modaloverlay
                title = {props.title}
                message = {props.message}
                onConfirm ={props.onConfirm}
                />,
                document.getElementById('overlay-root')
             )}
        </Fragment>
    );
};

export default ErrorModal;