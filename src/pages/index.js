import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import gitHub from "/public/Layer 3.png";
import gitHubHover from "/public/Layer 3Hover.png";
import linkedIn from "/public/Layer 4.png";
import linkedInHover from "/public/Layer 4Hover.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Jacob's Personal Site"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.bar}>
          <ul>
            <li className={styles.navLine}>
              <Link className={styles.navLineTextActive} href="/">
                {"<home>"}
              </Link>
            </li>
            <li className={styles.navLine}>
              <Link className={styles.navLineText} href="about">
                {"<about>"}
              </Link>
            </li>
            <li className={styles.navLine}>
              <Link className={styles.navLineText} href="projects">
                {"<projects>"}
              </Link>
            </li>
            <li className={styles.navLineLast}>
              <Link
                className={styles.navImage}
                href="https://github.com/Voiduhh"
                title="Github"
                target="_blank"
              >
                <Image alt={"GitHub"} src={gitHub} width={35} />
                <Image alt={"GitHub Hover"} src={gitHubHover} width={35} />
              </Link>
            </li>
            <li className={styles.navLineLast}>
              <Link
                className={styles.navImage}
                href="https://www.linkedin.com/in/jacobpikul/"
                target="_blank"
              >
                <Image alt={"LinkedIn"} src={linkedIn} width={35} />
                <Image alt={"LinkedIn Hover"} src={linkedInHover} width={35} />
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.bodyContent}>
          <div className={styles.bodyText}>
            <a>Hello,</a>
            <h1>{"I'm Jacob"}</h1>
            <ul>
              <li>Appian Developer</li>
              <li>Full Stack Developer</li>
              <li>Avid Learner</li>
            </ul>
          </div>
          <div className={styles.bodyImage}>
            <Image
              alt={"Keyboard"}
              src="/Keyboard.png"
              width={718}
              height={526}
            />
          </div>
        </div>
      </main>
    </>
  );
}
