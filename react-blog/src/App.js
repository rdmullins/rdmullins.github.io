//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './blog-style.css';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import {useState} from 'react'
import About from './About';
import Blog from './Blog';
import Portfolio from './Portfolio';

function App() {

  const [page, setPage] = useState("Landing"); // Landing, Blog, Portfolio or About

  return (
    <div className="container">
      <Navbar page={page} pageUpdater={setPage} />
      {(page === "Landing") && <Main page={page} pageUpdater={setPage} />}
      {(page === "About") && <About page={page} pageUpdater={setPage} />}
      {(page === "Blog") && <Blog page={page} pageUpdater={setPage} />}
      {(page === "Portfolio") && <Portfolio page={page} pageUpdater={setPage} />}
      <Footer />
    </div>
  );
}

export default App;
