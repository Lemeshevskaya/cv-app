import './App.scss';
import Home from './pages/Home';
import Inner from './pages/Inner';
import { Routes, Route } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronLeft, faBars);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        <Route exact path = "/inner" element = {<Inner/>}/>
      </Routes>
    </div>
  );
}

export default App;

