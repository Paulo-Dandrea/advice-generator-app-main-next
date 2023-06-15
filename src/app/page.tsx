import { AdviceCard } from "./features/advice";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <AdviceCard />
    </main>
  );
}
