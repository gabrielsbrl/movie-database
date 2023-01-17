import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/app.module.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>MovieDB</title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <h1>MovieDB</h1>
        </Link>
      </header>
      <section className={styles.appContainer}>
        <Component {...pageProps} />
      </section>
    </div>
  );
}
