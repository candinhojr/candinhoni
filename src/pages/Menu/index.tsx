import { useState } from 'react';

import styles from './Menu.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import Search from './Search';
import Filters from './Filters';
import Ordenator, { OrdenatorOptions } from './Ordenator';
import Itens from './Itens';

export default function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [ordenator, setOrdenator] = useState<OrdenatorOptions>('');

  return (
    <section className={styles.menu}>
      <h3 className={stylesTheme.title}>Cardápio</h3>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.menu__filters}>
        <Filters filter={filter} setFilter={setFilter} />
        <Ordenator ordenator={ordenator} setOrdenator={setOrdenator} />
        <Itens search={search} filter={filter} ordenator={ordenator} />
      </div>
    </section>
  );
}
