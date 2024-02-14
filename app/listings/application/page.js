// 'use server';
// 'use client';

// import { getJobs, addJob, editJob, deleteJob } from './actions';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
// import { useState } from 'react';
// import react from 'react';

export default async function Application() {
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
  revalidatePath('/application');
  const { rows } = await sql`SELECT DISTINCT * from Applications;`;

  // async function addJob(FormData) {
  //   'use server';
  //   const companyName = FormData.get('companyName');
  //   const jobTitle = FormData.get('jobTitle');
  //   const location = FormData.get('location');

  //   await sql`INSERT INTO Jobs (company_name, job_title, location) VALUES (${companyName}, ${jobTitle}, ${location});`;
  //   revalidatePath('/jobInfo');
  // }

  async function editApplication(FormData) {
    'use server';
    // console.log('hi');
    // console.log(jobId);
    const editDateApplied = FormData.get('editDateApplied');
    const editApplied = FormData.get('editApplied');
    const editEmailed = FormData.get('editEmailed');
    const editDoubleDown = FormData.get('editDoubleDown');
    const editFinalFollowup = FormData.get('editFinalFollowup');
    const jobId = FormData.get('jobId');
    // console.log(jobId);
    // console.log(editCompanyName);

    await sql`UPDATE Application SET date_applied=${editDateApplied}, applied=${editApplied}, emailed=${editEmailed},double_down=${editDoubleDown},final_followup=${editFinalFollowup}, WHERE job_id=${jobId};`;
    revalidatePath('/application');
  }

  async function deleteApplication(FormData) {
    'use server';
    const jobId = FormData.get('jobId');
    await sql`DELETE FROM Application WHERE job_id=${jobId};`;
    revalidatePath('/application');
  }

  return (
    <main>
      <div>
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
            <div style={{ width: '200px' }}>{ele.date_applied}</div>
            <div style={{ width: '200px' }}>{ele.applied}</div>
            <div style={{ width: '200px' }}>{ele.emailed}</div>
            <div style={{ width: '200px' }}>{ele.double_down}</div>
            <div style={{ width: '200px' }}>{ele.final_followup}</div>
            <span style={{ display: 'inline-block' }}>
              <form action={editApplication}>
                <input
                  type='text'
                  name='editDateApplied'
                  placeholder='Edit Date Applied'
                  required
                />
                <input
                  type='checkbox'
                  name='editApplied'
                  placeholder='Edit Applied'
                  required
                />
                <input
                  type='checkbox'
                  name='editEmailed'
                  placeholder='Edit Emailed'
                  required
                />
                <input
                  type='checkbox'
                  name='editDoubleDown'
                  placeholder='Edit Double Down'
                  required
                />
                <input
                  type='checkbox'
                  name='editFinalFollowup'
                  placeholder='Edit Final Followup'
                  required
                />
                <input type='hidden' name='jobId' value={ele.job_id} />
                <button>Edit Job</button>
              </form>
            </span>
            <form action={deleteApplication}>
              <input type='hidden' name='jobId' value={ele.job_id} />
              <button>Delete Job</button>
            </form>
          </div>
        ))}
      </div>
    </main>
  );
}
