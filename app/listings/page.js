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
  async function getTotalApps() {
    'use server'
    const {rows} = await sql`Select * from jobs `
    revalidatePath('/jobInfo')
    return rows.length
  }
  
  return (
    <div>
        <div className='welcome-stats' style={{ display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column', marginBottom:'20px' }}>
      <h2>Hello, Vicky!</h2>
      <div className='stats'>Total Applications Sent: {getTotalApps()}</div>
      {/* <div className='stats'>Interviewing: {`${3}`}</div>
      <div className='stats'>Applied: {`${150}`}</div>
      <div className='stats'>Done: {`${347}`}</div> */}
    </div>
      <form
        action={addJob}
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        <input
          type='text'
          name='companyName'
          placeholder='Add Company Name'
          required/>
        <input
          type='text'
          name='jobTitle'
          placeholder='Add Job Title'
          required/>
        <input
          type='text'
          name='location'
          placeholder='Add Location'
          style={{ display: 'flex', justifyContent: 'space-evenly' }}/>
        <button style={{
          whiteSpace: 'nowrap',
          backgroundColor: '#023047',
          color: 'white',
          borderRadius: '0.4em',
          padding: '0.3em',
          border: 'none',

        }}>Add Job</button>
      </form>
      <div
        className='welcome-stats'
        style={{
          // width: '100%',
          display: 'flex',
          gap: '50px',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <JobInfo />
        <Application />
        <div style={{ maxWidth: '100px' }}>
          <Interview />
        </div>
      </div>
    </div>
  );
}
