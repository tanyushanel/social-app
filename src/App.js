import './App.css';
import Header from "./components/structure/header/header";
import Nav from "./components/structure/nav/nav";
import Footer from "./components/structure/footer/footer";
import Profile from './components/pages/profile/profile';
import Dialogs from './components/pages/dialogs/dialogs';
import { Route } from 'react-router-dom';


function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="content">
                <Route path="/profile"
                       render={ () => <Profile profilePage={ props.appState.profilePage }
                                               dispatch={ props.dispatch }/> }/>
                <Route path="/dialogs"
                       render={ () => <Dialogs dialogsPage={ props.appState.dialogsPage }/> }/>
                {/*<Route path="/friends"*/ }
                {/*       render={ () => <Friends friends={ props.appState.friendsPage.friends }/> }/>*/ }
            </div>
            <Footer/>
        </div>
    );
}

export default App;
