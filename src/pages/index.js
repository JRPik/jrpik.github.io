import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jacob Test App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.bar}>
          <ul>
            <li className={styles.navLine}>
              <a className={styles.navLineTextActive}>{"<home>"}</a>
            </li>
            <li className={styles.navLine}>
              <a className={styles.navLineText} href="about">
                {"<about>"}
              </a>
            </li>
            <li className={styles.navLine}>
              <a className={styles.navLineText} href="projects">
                {"<projects>"}
              </a>
            </li>
            <li className={styles.navLine}>
              <a className={styles.navLineText} href="contact">
                {"<contact>"}
              </a>
            </li>
            <li className={styles.navLineLast}>
              <a
                className={styles.navImage}
                href="https://github.com/Voiduhh"
                title="Github"
                target="_blank"
              >
                <img src="Layer 3.png" />
                <img src="Layer 3Hover.png" />
              </a>
            </li>
            <li className={styles.navLineLast}>
              <a
                className={styles.navImage}
                href="https://www.linkedin.com/in/jacobpikul/"
                target="_blank"
              >
                <img src="Layer 4.png" />
                <img src="Layer 4Hover.png" />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.bodyContent}>
          <div className={styles.bodyText}>
            <a>Hello,</a>
            <h1>I'm Jacob</h1>
            <ul>
              <li>Appian Developer</li>
              <li>Full Stack Developer</li>
              <li>Avid Learner</li>
            </ul>
          </div>
          <div className={styles.bodyImage}>
            <img src="Keyboard.png" />
          </div>
        </div>
      </main>
    </>
  );
}
