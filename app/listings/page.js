// 'use client'
import { sql } from '@vercel/postgres';
import JobInfo from './jobInfo/page';
import Application from './application/page';
import Interview from './interview/page';
import { revalidatePath } from 'next/cache';

export default function Listings() {
  //   console.log({
  //     POSTGRES_URL: process.env.POSTGRES_URL,
  //     POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
  //   });
  //   const { rows } = await sql`SELECT * from users;`;
  //   console.log(rows);

  async function addJob(FormData) {
    'use server';
    const companyName = FormData.get('companyName');
    const jobTitle = FormData.get('jobTitle');
    const location = FormData.get('location');

    await sql`INSERT INTO Jobs (company_name, job_title, location) VALUES (${companyName}, ${jobTitle}, ${location});`;
    revalidatePath('/jobInfo');
  }
  return (
    <div>
        <form
          action={addJob}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <input
            type='text'
            name='companyName'
            placeholder='Add Company Name'
            required
          />
          <input
            type='text'
            name='jobTitle'
            placeholder='Add Job Title'
            required
          />
          <input
            type='text'
            name='location'
            placeholder='Add Location'
            style={{ display: 'flex', justifyContent: 'space-evenly' }}
          />
          <button>Add Job</button>
        <br></br>
        <div style={{ display: 'flex' }}>
          <p style={{ width: '200px' }}>Company</p>
          <p style={{ width: '200px' }}>Job Title</p>
          <p style={{ width: '200px' }}>Location</p>
        </div>
      </form>
      <main
        className='welcome-stats'
        style={{
          backgroundColor: 'lightblue',
          width: '100%',
          display: 'flex',
          gap: '50px',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '500px',
        }}
      >
        <JobInfo />
        <Application />
        <Interview />
      </main>
    </div>
  );
}
