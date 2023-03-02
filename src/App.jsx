import Pages from './pages/Pages';
import Navbar from './components/Navbar';
import Logo from './components/Logo'
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  
  return (
      <div className='App'>
            <BrowserRouter>
                <Navbar />
                <Pages />
                <Logo />
            </BrowserRouter>
      </div>
  );
}

export default App;
