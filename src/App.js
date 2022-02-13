import './App.scss';
import Home from './pages/Home';
import Inner from './pages/Inner';
import { Routes, Route } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft, faBars, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebookF, faSkype } from "@fortawesome/free-brands-svg-icons"; 
library.add( faChevronLeft, faBars, faPhone, faTwitter, faEnvelope, faFacebookF, faSkype);

function App() {
  console.log(library);
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

