import type { NextPage } from "next";
import Head from "next/head";
import PlayButton from "../components/PlayButton";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Le Jeu du Poids</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Le Jeu du Poids</h1>
        </div>
        <section className={styles.play}>
          <PlayButton />
        </section>
      </main>
    </div>
  );
};

export default Home;
