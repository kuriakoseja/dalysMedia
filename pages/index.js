import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>DalysMedia</title>
        <meta name="description" content="Dalysmedia" />
        <meta name="og:url" content="https://www.dalysmedia.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>

        <div className={styles.darkShades} />

        <div className={styles.backgroundShapes}>
          <Image
            src="/shapes/line.svg"
            alt="Texture"
            width={480}
            height={107}
            priority
          />
        </div>


        <div className={styles.center}>
          <Image
            src="/logo/logo.svg"
            alt="Dalysmedia Logo"
            width={480}
            height={407}
            priority
          />
        </div>
        <div className={styles.video}>

          <video width="640" height="360" loop autoPlay muted >
            <source src={`/video/dalysmedia.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={styles.grid}>
          <a
           
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              KEEP IN TOUCH <span>-&gt;</span>
            </h2>
            <p>
              joykurias@gmail.com
            </p>
          </a>


        </div>
      </main>
    </>
  );
}
