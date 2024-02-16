import styles from "../page.module.css";
import Link from "next/link";

export default function BlogHome() {
  return (
    <main className={styles.main}>
      <p>blog pageだお</p>
      <Link href='/0'>0</Link>
      <Link href='/1'>1</Link>
      <Link href='/2'>2</Link>

    </main>
  );
}