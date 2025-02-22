import "@/styles/globals.css";
import Head from "next/head";
import Simulator from "components/Simulator";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-white h-screen overflow-auto">
      <Head>
        <title>MDP Algorithm Simulator</title>
      </Head>
      <Simulator />
    </div>
  );
}
