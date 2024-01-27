import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Page from './pages/Page';
import Page2 from './pages/Page2';
import NotFound from './pages/NotFound';
import './css/App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <main className='App-main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/page' element={<Page />} />
            <Route path='/page2' element={<Page2 />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
