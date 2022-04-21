import styles from "./Ordenator.module.scss";
import choices from "./choices.json";

export default function Ordenator() {
  return (
    <button className={styles.ordenator}>
      <span>Ordenar Por</span>
      <div className={styles.ordenator__options}>
        {choices.map((option) => (
          <div className={styles.ordenator__option} key={option.value}>
            {option.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
