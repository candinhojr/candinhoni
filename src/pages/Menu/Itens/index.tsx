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

  const handleOrder = (
    newList: typeof itens,
    property: keyof Pick<typeof itens[0], "size" | "serving" | "price">
  ) => {
    return newList.sort((a, b) => (a[property] > b[property] ? 1 : -1));
  };

  function order(newList: typeof itens) {
    switch (ordenator) {
      case "porcao":
        return handleOrder(newList, "size");
      case "qtd_pessoas":
        return handleOrder(newList, "serving");
      case "preco":
        return handleOrder(newList, "price");

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
