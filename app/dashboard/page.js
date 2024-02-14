'use client'

import * as React from 'react';
import WelcomeStats from '../welcomeStats/page';
import Sidebar from '../ui/sidebar';

export default function Dashboard(){
  
  return (
    <div>
      <Sidebar/>
      <WelcomeStats/>
    </div>
  )
}