
import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';

function App() {
  return (
      <div className="app-wrapper">
        <Header  />
      <Nav />
      <div className="content">
        {/* <Profile /> */}
        <Dialogs />
      </div>



        <Footer  />

      </div>
  );
}

export default App;
