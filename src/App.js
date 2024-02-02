import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Illust from './pages/Illust';
import Others from './pages/Others';
import NotFound from './pages/NotFound';
import './css/App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <main className='App-main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/illust' element={<Illust />} />
            <Route path='/others' element={<Others />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
        <Header />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
