import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Cookies from './components/Cookies';
import NotFound from './components/NotFound';
import './App.css';
import './devicon-master/devicon.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
