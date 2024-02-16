import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <p>アイウエオ</p>
      <Link href='/about'>あばうとへ</Link>
      <Link href='/blog'>ぶろぐへ</Link>
    </main>
  );
}
