import { sql } from '@vercel/postgres';
import JobInfo from './jobInfo/page';
// import Application from './application/page';
// import Interview from './interview/page';

export default async function WelcomeStats() {
  //   console.log({
  //     POSTGRES_URL: process.env.POSTGRES_URL,
  //     POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
  //   });
  //   const { rows } = await sql`SELECT * from users;`;
  //   console.log(rows);
  return (
    <main className='welcome-stats'>
        <JobInfo />
        {/* <Application /> */}
        {/* <Interview /> */}
    </main>
  );
}