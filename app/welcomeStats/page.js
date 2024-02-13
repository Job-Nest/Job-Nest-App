import { sql } from '@vercel/postgres';

export default async function WelcomeStats() {
  //   console.log({
  //     POSTGRES_URL: process.env.POSTGRES_URL,
  //     POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
  //   });
  //   const { rows } = await sql`SELECT * from users;`;
  //   console.log(rows);
  return (
    <main className='welcome-stats' style={{ display: 'flex', gap: '50px', justifyContent: 'center', marginTop: '50px' }}>
      <div>Hello, {`${'Julian'}!`}</div>
      <div className='stats'>Total: {`${500}`}</div>
      <div className='stats'>Interviewing: {`${3}`}</div>
      <div className='stats'>Applied: {`${150}`}</div>
      <div className='stats'>Done: {`${347}`}</div>
      <button>Add Listing</button>
    </main>
  );
}
