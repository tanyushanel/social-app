
import './App.css';
import Header from "./components/structure/header/header";
import Nav from "./components/structure/nav/nav";
import Footer from "./components/structure/footer/footer";
import Profile from './components/pages/profile/profile';
import Dialogs from './components/pages/dialogs/dialogs';
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
