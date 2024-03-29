// 'use server';
// 'use client';

// import { getJobs, addJob, editJob, deleteJob } from './actions';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
// import { useState } from 'react';
// import react from 'react';

export default async function JobInfo() {
  // const router = useRouter();
  // const [rows, setRows] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const jobs = await getJobs();
  //       setRows(jobs);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };
  //   fetchData();

  // }, []);

  // console.log(rows);
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
  revalidatePath('/jobInfo');
  const { rows } = await sql`SELECT DISTINCT * from Jobs;`;

  // async function addJob(FormData) {
  //   'use server';
  //   const companyName = FormData.get('companyName');
  //   const jobTitle = FormData.get('jobTitle');
  //   const location = FormData.get('location');

  //   await sql`INSERT INTO Jobs (company_name, job_title, location) VALUES (${companyName}, ${jobTitle}, ${location});`;
  //   revalidatePath('/jobInfo');
  // }

  async function editJob(FormData) {
    'use server';
    // console.log('hi');
    // console.log(jobId);
    const editCompanyName = FormData.get('editCompanyName');
    const editJobTitle = FormData.get('editJobTitle');
    const editLocation = FormData.get('editJobLocation');
    const jobId = FormData.get('jobId');
    console.log(jobId);
    console.log(editCompanyName);

    await sql`UPDATE Jobs SET company_name=${editCompanyName}, job_title=${editJobTitle}, location=${editLocation} WHERE job_id=${jobId};`;
    revalidatePath('/jobInfo');
  }

  async function deleteJob(FormData) {
    'use server';
    const jobId = FormData.get('jobId');
    await sql`DELETE FROM Jobs WHERE job_id=${jobId};`;
    revalidatePath('/jobInfo');
  }

  return (
    <main>
      <div>
        <div
          style={{
            display: 'flex',
            color: 'darkblue',
            fontWeight: 'bold',
            maxWidth: '500px',
          }}
        >
          <div style={{marginRight: '47px'}}>
            Company Title
          </div>
          <div style={{ marginRight:'92px'}}>Job Title</div>
          <div>Location</div>
        </div>
        {/* <form
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
        </form> */}
        {rows.map((ele) => (
          <div
            key={ele.job_id}
            style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
          >
            <div style={{ width: '150px' }}>{ele.company_name}</div>
            <div style={{ width: '150px' }}>{ele.job_title}</div>
            <div style={{ width: '150px' }}>{ele.location}</div>
            {/* <span style={{ display: 'inline-block' }}> */}
            <form
              action={editJob}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <input
                type='text'
                name='editCompanyName'
                placeholder='Edit Company Name'
                required
              />
              <input
                type='text'
                name='editJobTitle'
                placeholder='Edit Job Title'
                required
              />
              <input
                type='text'
                name='editJobLocation'
                placeholder='Edit Job Location'
                required
              />
              <input type='hidden' name='jobId' value={ele.job_id} />
              <button
                style={{
                  backgroundColor: '#023047',
                  whiteSpace: 'nowrap',
                  color: 'white',
                  borderRadius: '0.4em',
                  padding: '0.3em',
                  border: 'none',
                  marginLeft: '12em',
                }}
              >
                Save Changes
              </button>
            </form>
            <form action={deleteJob}>
              <input type='hidden' name='jobId' value={ele.job_id} />
              <button
                style={{
                  whiteSpace: 'nowrap',
                  backgroundColor: '#023047',
                  color: 'white',
                  borderRadius: '0.4em',
                  padding: '0.3em',
                  border: 'none',
                }}
              >
                Delete Job
              </button>
            </form>
          </div>
        ))}
      </div>
    </main>
  );
}
