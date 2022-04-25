import DefaultPage from 'components/DefaultPage';
import Navbar from 'components/Navbar';
import Menu from 'pages/Menu';
import Opening from 'pages/Opening';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Opening />} />
            <Route path="cardapio" element={<Menu />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
