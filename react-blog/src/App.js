//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './blog-style.css';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
