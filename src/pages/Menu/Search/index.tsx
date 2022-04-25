import React from 'react';
import { CgSearch } from 'react-icons/cg';
import styles from './Search.module.scss';

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ search, setSearch }: Props) {
  return (
    <div className={styles.search}>
      <input
        type="search"
        name="search"
        id="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}
