import React from 'react';
import styles from './dialog.module.scss';
import { NavLink } from "react-router-dom";
import ProfileInfo from "../../profile/profileInfo/profileInfo";

const Dialog = (props) => {
    let path = `/dialogs/${ props.id }`;
    return (
        <NavLink to={ path }
                 className={ styles.dialog }>
            <ProfileInfo/>
            <span>{ props.name }</span>
        </NavLink>
    )
}

export default Dialog;