import './App.css';
import Header from "./components/structure/header/header";
import Nav from "./components/structure/nav/nav";
import Footer from "./components/structure/footer/footer";
import Profile from './components/pages/profile/profile';
import Dialogs from './components/pages/dialogs/dialogs';
import { Route } from 'react-router-dom';
import Friend from "./components/pages/friends/friend/friend";
import Friends from "./components/pages/friends/friends";

function App(props) {
    return (

        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="content">
                {/*<Route path="/profile" component={Profile}  />*/ }
                {/*<Route path="/dialogs" component={Dialogs} />*/ }

                <Route path="/profile"
                       render={ () => <Profile posts={ props.appState.profilePage.posts }
                                               addPost={ props.addPost }/> }/>
                <Route path="/dialogs"
                       render={ () => <Dialogs dialogs={ props.appState.messagesPage.dialogs }
                                               messages={ props.appState.messagesPage.messages }/> }/>
                <Route path="/friends"
                       render={ () => <Friends friends={ props.appState.friendsPage.friends }/> }/>
            </div>
            <Footer/>
        </div>


    );
}

export default App;
