import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DefaultPage from 'components/DefaultPage';
import Navbar from 'components/Navbar';
import About from 'pages/About';
import Menu from 'pages/Menu';
import Opening from 'pages/Opening';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Opening />} />
            <Route path="cardapio" element={<Menu />} />
            <Route path="sobre" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
