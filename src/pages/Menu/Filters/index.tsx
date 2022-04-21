import classNames from "classnames";

import filters from "./filters.json";
import styles from "./Filters.module.scss";

type IOption = typeof filters[0];

interface Props {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filters({ filter, setFilter }: Props) {
  function handleFilterSelection(option: IOption) {
    if (filter === option.id) return setFilter(null);
    return setFilter(option.id);
  }

  return (
    <div className={styles.filters}>
      {filters.map((option) => (
        <button
          className={classNames({
            [styles.filters__filter]: true,
            [styles["filters__filter--ativo"]]: filter === option.id,
          })}
          key={option.id}
          onClick={() => handleFilterSelection(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
