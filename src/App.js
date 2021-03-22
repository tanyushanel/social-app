
import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header  />
        <Nav />
        <div className="content">
          <Route path="/profile" component={Profile}  />
          <Route path="/dialogs" component={Dialogs} />
        </div>
        <Footer  />
      </div>
    </BrowserRouter>

  );
}

export default App;
