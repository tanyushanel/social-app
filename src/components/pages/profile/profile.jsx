import React from "react";
import MyPosts from "./myPosts/myPosts";
import AddPost from "./addPost/addPost";


const Profile = (props) => {

    return (
        <div>
            <AddPost dispatch={ props.dispatch }
                     newPostText={ props.state.newPostText }
            />

            <MyPosts posts={ props.state.posts }
                     newPostText={ props.state.newPostText }
                     dispatch={ props.dispatch }/>
        </div>
    );
};

export default Profile;
