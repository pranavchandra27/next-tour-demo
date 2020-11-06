import Head from "next/head";
import Link from "next/link";
import Table from "../components/Table";
import "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* <main className='main-content container'>
        <h1 className='main-heading'>Welcome to MusixApp</h1>
        <Link href='/trending'>Tending Page</Link>
      </main> */}
      <Table />
    </div>
  );
}
