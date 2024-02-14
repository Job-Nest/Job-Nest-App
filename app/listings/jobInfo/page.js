
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import Box from '@mui/material/Box'

export default async function JobInfo() {

  
  const { rows } = await sql`SELECT DISTINCT * from Jobs;`;
  console.log(rows);

  async function addJob(FormData) {
    'use server';
    console.log('hi');
    const companyName = FormData.get('companyName');
    const jobTitle = FormData.get('jobTitle');
    const location = FormData.get('location');

    await sql`INSERT INTO Jobs (company_name, job_title, location) VALUES (${companyName}, ${jobTitle}, ${location});`;
    revalidatePath('/jobInfo');
  }

  return (
    <main>
      <div style={{width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
  <h5>Company</h5>
  <h5>Job Position</h5>
  <h5>Location</h5>
  </div>
      <form action={addJob} style={{width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
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
          required
        />
        <button>Add Job</button>
      </form>

        {rows.map((ele) => (
          <div
            key={ele.job_id}
            style={{ display: 'flex', justifyContent: 'space-evenly'}}
          >
            <div>{ele.company_name}</div>
            <div>{ele.job_title}</div>
            <div>{ele.location}</div>
          </div>
        ))}
      
    </main>
  );
}
