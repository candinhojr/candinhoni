import { useState } from "react";

import { ReactComponent as Logo } from "assets/logo.svg";
import styles from "./Menu.module.scss";
import Search from "./Search";
import Filters from "./Filters";
import Ordenator from "./Ordenator";
import Itens from "./Itens";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [ordenator, setOrdenator] = useState("");

  return (
    <main>
      <nav className={styles.navBar}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <Search search={search} setSearch={setSearch} />
        <div className={styles.menu__filters}>
          <Filters filter={filter} setFilter={setFilter} />
          <Ordenator ordenator={ordenator} setOrdenator={setOrdenator} />
          <Itens search={search} filter={filter} ordenator={ordenator} />
        </div>
      </section>
    </main>
  );
}
