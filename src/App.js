import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pens from './pages/Pens';
import SingleProduct from './pages/SingleProduct';
import ContactPage from './pages/ContactPage';
import Acsessories from './pages/Acsessories';
import Highquality from './pages/Highquality';
import FountainPens from './pages/Fountainpens';
import Rollerballpens from './pages/Rollerballpens';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Licensing from './pages/Licensing';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Home />} />
            
            <Route path='/pens' element = {<Pens />} />

            <Route path='/fountainpens' element = {<FountainPens />} />

            <Route path='/rollerballpens' element = {<Rollerballpens />} />

            <Route path='/highquality' element = {<Highquality />} />

            <Route path='/acsessories' element = {<Acsessories />} />

            <Route path='/pens/:id' element = {<SingleProduct />} />

            <Route path='/contact' element = {<ContactPage />} />
            
            <Route path='/about' element={<AboutUs/>} />

            <Route path='/privacy' element={<PrivacyPolicy />} />

            <Route path='/licensing' element = {<Licensing />} />
            
        </Routes>
        </BrowserRouter>
    </div>

  );
}

export default App;
