'use client'

import { sql } from '@vercel/postgres';

export default function WelcomeStats() {
  return (
    <main className='welcome-stats' style={{ display: 'flex', gap: '50px', justifyContent: 'center', marginTop: '50px' }}>
      <div>Hello, {`${'Julian'}!`}</div>
      <div className='stats'>Total: {`${500}`}</div>
      <div className='stats'>Interviewing: {`${3}`}</div>
      <div className='stats'>Applied: {`${150}`}</div>
      <div className='stats'>Done: {`${347}`}</div>
      <button>Add Listing</button>
    </main>
  );
}
