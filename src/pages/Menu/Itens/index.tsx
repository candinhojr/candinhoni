import itens from "./itens.json";
import styles from "./Itens.module.scss";
import Item from "./Item";
import { useEffect, useState } from "react";

interface Props {
  search: string;
  filter: number | null;
  ordenator: string;
}

export default function Itens({ search, filter, ordenator }: Props) {
  const [list, setList] = useState(itens);

  function handleSearch(title: string) {
    const regex = new RegExp(search, "i");
    return regex.test(title);
  }

  function handleFilter(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  function order(newList: typeof itens) {
    switch (ordenator) {
      case "porcao":
        return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
      case "qtd_pessoas":
        return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case "preco":
        return newList.sort((a, b) => (a.price > b.price ? 1 : -1));

      default:
        return newList;
    }
  }

  useEffect(() => {
    const newList = itens.filter(
      (item) => handleSearch(item.title) && handleFilter(item.category.id)
    );
    setList(order(newList));
  }, [search, filter, ordenator]);

  return (
    <div className={styles.itens}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
