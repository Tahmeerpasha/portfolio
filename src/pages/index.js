import Head from "next/head";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Main from "../../components/Main";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tahmeer Pasha | Frontend developer</title>
        <Link rel="icon" href="/assets/favicon.ico"></Link>
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
