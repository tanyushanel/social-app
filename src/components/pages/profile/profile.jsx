import React from "react";
import MyPosts from "./myPosts/myPosts";
import AddPost from "./addPost/addPost";


const Profile = (props) => {

    return (
        <div>
            <AddPost dispatch={ props.dispatch }
                     newPostText={ props.newPostText }
            />

            <MyPosts posts={ props.profilePage.posts }
                     newPostText={ props.newPostText }
                     dispatch={ props.dispatch }/>
        </div>
    );
};

export default Profile;
