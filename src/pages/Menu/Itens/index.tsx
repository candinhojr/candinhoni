import itens from "./itens.json";
import styles from "./Itens.module.scss";
import Item from "./Item";
import { useEffect, useState } from "react";

interface Props {
  search: string;
  filter: number | null;
  ordenator: string;
}

export default function Itens(props: Props) {
  const [list, setList] = useState(itens);
  const { search, filter } = props;

  function handleSearch(title: string) {
    const regex = new RegExp(search, "i");
    return regex.test(title);
  }

  function handleFilter(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  useEffect(() => {
    const newList = itens.filter(
      (item) => handleSearch(item.title) && handleFilter(item.category.id)
    );
    setList(newList);
  }, [search, filter]);

  return (
    <div className={styles.itens}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
