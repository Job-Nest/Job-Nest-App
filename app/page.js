// import WelcomeStats from './welcomeStats/page';
import Listings from './listings/page';
// import { redirect } from 'next/navigation';
// import { useState } from 'react';
// import react from 'react';

export default function Home() {
  // const [loggedin, setLoggedIn] = useState(false);

  return (
    <main
      className='welcome-stats'
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        justifyContent: 'center',
        marginTop: '50px',
      }}
    >
      <h1 style={{ textAlign: 'left', color: '#023047', marginLeft: '20px' }}>
        Job Nest
      </h1>
      <form style={{marginLeft:'20px'}}>
        <input type='text' name='username' placeholder='Username' />
        <input type='text' name='password' placeholder='Password' />
        <button
          style={{
            backgroundColor: '#023047',
            whiteSpace: 'nowrap',
            color: 'white',
            borderRadius: '0.4em',
            padding: '0.3em',
            border: 'none',
            marginLeft: '10px'
          }}
        >
          Login
        </button>
        <br />
        <button
          style={{
            backgroundColor: '#023047',
            whiteSpace: 'nowrap',
            color: 'white',
            borderRadius: '0.4em',
            padding: '0.3em',
            border: 'none',
            marginTop: '10px'
          }}
        >
          Logout
        </button>
      </form>
      {/* <WelcomeStats/> */}
      <Listings />
    </main>
  );
}
