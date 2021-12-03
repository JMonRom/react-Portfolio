import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header';
import Navbar from './components/Navbar'
// import {Main} from './components/Main';
// import {Footer} from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Header />
      {/* <Main />
      <Footer/> */}
    </div>
  );
}

export default App;
