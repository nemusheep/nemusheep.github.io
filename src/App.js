import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Page from './Page';
import Page2 from './Page2';
import NotFound from './NotFound';
import './App.css';

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
