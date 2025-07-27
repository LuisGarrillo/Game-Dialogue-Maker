import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <h1>
          Game Dialogue Maker
        </h1>
        <select></select>
        <h1>Manage your projects</h1>
      </header>
      <div>
        The dialogue boxes go here
      </div>
      <div>

      </div>
    </div>
  );
}
