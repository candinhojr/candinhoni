import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import stylesTheme from 'styles/Theme.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import styles from './NotFound.module.scss';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={classNames(styles.container, stylesTheme.container)}>
      <div className={styles.goBack}>
        <button onClick={() => navigate(-1)}>{'< Voltar'}</button>
      </div>
      <NotFoundImage />
    </div>
  );
}
