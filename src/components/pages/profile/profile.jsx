import React from "react";
import MyPosts from "./myPosts/myPosts";
import AddPost from "./addPost/addPost";


const Profile = (props) => {

    return (
        <div>
            <AddPost addPost={ props.addPost }
                     newPostText={ props.newPostText }
                     updateNewPostText={ props.updateNewPostText }/>
            <MyPosts posts={ props.profilePage.posts }
                     newPostText={ props.newPostText }
                     updateNewPostText={ props.updateNewPostText }/>
        </div>
    );
};

export default Profile;
