import { Routes, Route } from 'react-router-dom';
import HeaderGDF from './components/layout/HeaderGDF';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Conselho from './pages/Conselho';
import SearchResults from './pages/SearchResults';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <HeaderGDF />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resultados" element={<SearchResults />} />
        <Route path="/conselho/:id" element={<Conselho />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
