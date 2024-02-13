// import Image from 'next/image';
// import styles from './page.module.css';
import { sql } from '@vercel/postgres';
import WelcomeStats from './WelcomeStats/page';
import Listings from './Listings/page';

export default async function Home() {
  console.log({
    POSTGRES_URL: process.env.POSTGRES_URL,
    POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
  });
  const { rows } = await sql`SELECT * from users;`;
  console.log(rows);
  return (
    <main>
      <div>
        <WelcomeStats />
        <Listings/>
      </div>
    </main>
  );
}
