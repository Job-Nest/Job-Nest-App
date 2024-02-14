'use client';

import { sql } from '@vercel/postgres';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function WelcomeStats() {

  return (
    <main
      className='welcome-stats'
      style={{
        display: 'flex',
        gap: '50px',
        justifyContent: 'center',
        marginTop: '50px',
      }}
    >
      <div>Hello, {`${'Julian'}!`}</div>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper elevation={5}>
          <div className='stats'>Total: {`${500}`}</div>
        </Paper>
        <Paper elevation={5}>
          <div className='stats'>Interviewing: {`${3}`}</div>
        </Paper>
        <Paper elevation={5}>
          <div className='stats'>Applied: {`${150}`}</div>
        </Paper>
        <Paper elevation={5}>
          <div className='stats'>Done: {`${347}`}</div>
        </Paper>
      </Box>
      <button>Add Listing</button>
    </main>
  );
}
