
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'

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
  
      <form action={addJob}>
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
      <Box sx={{height: 400, width: '100%'}}>
        {rows.map((ele) => (
          <div
            key={ele.job_id}
            style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
          >
            <div>{ele.company_name}</div>
            <div>{ele.job_title}</div>
            <div>{ele.location}</div>
          </div>
        ))}
      </Box>
    </main>
  );
}
