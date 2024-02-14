// 'use server';

// import { sql } from '@vercel/postgres';
// import { revalidatePath } from 'next/cache';
// // import { useRouter } from 'next/router';


// export async function getJobs() {
//   'use server';
//   revalidatePath('/jobInfo');
//   const result = await sql`SELECT DISTINCT * from Jobs;`;
//   const rows = result.rows;
//   console.log(rows);
//   return rows;
// }

// export async function addJob(FormData) {
//   'use server';
//   const companyName = FormData.get('companyName');
//   const jobTitle = FormData.get('jobTitle');
//   const location = FormData.get('location');

//   await sql`INSERT INTO Jobs (company_name, job_title, location) VALUES (${companyName}, ${jobTitle}, ${location});`;

//   revalidatePath('/jobInfo');
// }

// export async function editJob(FormData) {
//   'use server';
//   console.log('hi');
//   // console.log(jobId);
//   const editCompanyName = FormData.get('editCompanyName');
//   const editJobTitle = FormData.get('editJobTitle');
//   const editLocation = FormData.get('editJobLocation');
//   const jobId = FormData.get('jobId');
//   console.log(jobId);
//   console.log(editCompanyName);

//   await sql`UPDATE Jobs SET company_name=${editCompanyName}, job_title=${editJobTitle}, location=${editLocation} WHERE job_id=${jobId};`;
//   revalidatePath('/jobInfo');
// }

// export async function deleteJob(FormData) {
//   'use server';
//   const jobId = FormData.get('jobId');
//   await sql`DELETE FROM Jobs WHERE job_id=${jobId};`;
//   revalidatePath('/jobInfo');
// }
