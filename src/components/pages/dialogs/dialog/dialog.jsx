import React from 'react';
import styles from './dialog.module.scss';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <NavLink to={path} className={styles.dialog}> {props.name} </NavLink>
    )
}

export default Dialog;