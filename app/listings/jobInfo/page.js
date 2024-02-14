// import Link from 'next/link';
// import Modal from '@/components/Modal';
// import Modal from 'react-modal';
// import React from 'react';
// import { useState } from 'react';
import { sql } from '@vercel/postgres';
// import handler from '../../handler';

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

  //   console.log(rows);

  //   const [editing, setEditing] = useState(false);
  //   const [rows, setRows] = useState([]);
  //   const [count, setCount] = useState(1);
  const { rows } = await sql`SELECT DISTINCT * from Jobs;`;
  console.log(rows);
  //   useEffect(() => {
  //     async function fetchJobs() {
  //       try {
  //         const { rows: data } = await sql`SELECT DISTINCT * from Jobs;`;
  //         console.log(data);
  //         setRows(data);
  //       } catch (error) {
  //         console.log('error', error);
  //       }
  //     }
  //     fetchJobs();
  //   }, []);

  //   //   console.log(editing);
  //   const handleEdit = () => {
  //     setEditing(true);
  //   };

  //   console.log(editing);
  return (
    <main>
      {/* {editing && <div>Hello</div>} */}
      <div>
        {rows.map((ele) => (
          <div
            key={ele.job_id}
            style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
          >
            <div>{ele.company_name}</div>
            <div>{ele.job_title}</div>
            {/* <button onClick={handleEdit}>Edit</button> */}
          </div>
        ))}
      </div>
    </main>
  );
}
