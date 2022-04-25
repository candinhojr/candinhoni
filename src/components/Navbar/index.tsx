import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const rotes = [
    {
      label: 'Início',
      to: '/',
    },
    {
      label: 'Cardápio',
      to: '/cardapio',
    },
    {
      label: 'Sobre',
      to: '/sobre',
    },
  ];

  return (
    <nav className={styles.navbar}>
      <Logo />
      <ul className={styles.navbar__list}>
        {rotes.map((rote, index) => (
          <li key={index} className={styles.navbar__link}>
            <Link to={rote.to}>{rote.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
