import "@/styles/globals.css";
import { Roboto, Ubuntu } from "@next/font/google";

const roboto = Ubuntu({ weight: "400", subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
