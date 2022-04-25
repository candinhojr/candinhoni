import Menu from 'pages/Menu';
import Opening from 'pages/Opening';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/cardapio" element={<Menu />} />
      </Routes>
    </Router>
  );
}
