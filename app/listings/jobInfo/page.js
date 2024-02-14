// 'use server';
// 'use client';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
export default async function JobInfo() {
  //   console.log(sql);
  // {
  //     job_id: 2,
  //     company_name: 'Meta',
  //     job_title: 'Software Engineer',
  //     location: 'Los Angeles',
  //     application_deadline: new Date('2024-04-15T07:00:00.000Z'),
  //     contact_email: 'fb@fb.com',
  //     contact_phone: '5552222',
  //     user_id: null
  //   },

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
  // } = async (FormData) => {
  //   // console.log('hi');
  //   // 'use server';

  //   const content = FormData.get('content');

  //   let test =
  //     await sql`INSERT INTO Jobs (company_name, job_title) VALUES (${content}, ${content});`;
  //   console.log(test);
  //   console.log('hi');
  // };
  return (
    <main>
      <div>
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
      </div>
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
    </main>
  );
}
