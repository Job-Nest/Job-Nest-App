// 'use client'
import { sql } from '@vercel/postgres';
import JobInfo from './jobInfo/page';
import Application from './application/page';
import Interview from './interview/page';

export default function Listings() {
  //   console.log({
  //     POSTGRES_URL: process.env.POSTGRES_URL,
  //     POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
  //   });
  //   const { rows } = await sql`SELECT * from users;`;
  //   console.log(rows);
  return (
    <main
      className='welcome-stats'
      style={{
        backgroundColor: 'red',
        display: 'block',
        gap: '50px',
        justifyContent: 'center',
        marginBottom: '500px',
      }}
    >
      <JobInfo/>
      <Application />
      <Interview />
    </main>
  );
}
