import './App.css';
import Header from "./components/structure/header/header";
import Nav from "./components/structure/nav/nav";
import Footer from "./components/structure/footer/footer";
import Profile from './components/pages/profile/profile';
import Dialogs from './components/pages/dialogs/dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="content">
                    {/*<Route path="/profile" component={Profile}  />*/ }
                    {/*<Route path="/dialogs" component={Dialogs} />*/ }

                    <Route path="/profile"
                           render={ () => <Profile posts={ props.appState.profilePage.posts }/> }/>
                    <Route path="/dialogs"
                           render={ () => <Dialogs dialogs={ props.appState.messagesPage.dialogs }
                                                   messages={ props.appState.messagesPage.messages }/> }/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;
