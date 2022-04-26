import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DefaultPage from 'components/DefaultPage';
import Navbar from 'components/Navbar';
import About from 'pages/About';
import Menu from 'pages/Menu';
import Opening from 'pages/Opening';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Opening />} />
            <Route path="cardapio" element={<Menu />} />
            <Route path="sobre" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
