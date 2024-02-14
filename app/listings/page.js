// 'use client'
import { sql } from '@vercel/postgres';
import JobInfo from './jobInfo/page';
import Application from './application/page';
import Interview from './interview/page';

export default function Listings() {
 
  return (
    <main
      className='welcome-stats'
      style={{
        backgroundColor: 'red',
        display: 'block',
        gap: '50px',
        justifyContent: 'center',
        marginBottom: '500px',
      }}
    >
      <JobInfo/>
      {/* <Application />
      <Interview /> */}
    </main>
  );
}
