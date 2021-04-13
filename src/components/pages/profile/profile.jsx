import React from "react";
import MyPosts from "./myPosts/myPosts";
import AddPost from "./addPost/addPost";


const Profile = (props) => {

    return (
        <div>
            <AddPost dispatch={ props.dispatch }
                     newPostText={ props.profilePage.newPostText }
            />

            <MyPosts posts={ props.profilePage.posts }
                     newPostText={ props.profilePage.newPostText }
                     dispatch={ props.dispatch }/>
        </div>
    );
};

export default Profile;
