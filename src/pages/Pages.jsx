import { Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import Explore from './Explore';
import Profile from './Profile';
import Wholesales from './Wholesales';
import Home from './Home';
import Favorites from './Favorites';
import About from './About';

const Pages = () => {
  return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/favorite' element={<Favorites />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/wholesale' element={<Wholesales/>} />
        </Routes>
    )
}

export default Pages;