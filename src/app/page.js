import Image from "next/image";
import styles from "./page.module.css";
import Timer from "./components/Timer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Timer />
    </main>
  );
}
