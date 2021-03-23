import React from "react";
import styles from "./header.module.scss";
import Search from "../search/search";
import ProfileInfo from "../../pages/profile/profileInfo/profileInfo";
import {IoIosNotificationsOutline} from "@react-icons/all-files/io/IoIosNotificationsOutline";
import {TiMessage} from "@react-icons/all-files/ti/TiMessage";

const Header = () => {
    return (
        <div className={`header ${styles.header}`}>
            <div>
                <span>*</span>
                <img className={styles.logo} src='http://demo.foxthemes.net/socialitev2.0/assets/images/logo.png'/>
            </div>


            <Search/>

            <div>
                <IoIosNotificationsOutline />
                <TiMessage/>
                <ProfileInfo/>
            </div>

        </div>
    );
};

export default Header;
