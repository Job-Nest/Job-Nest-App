'use client';

import * as React from 'react';
import Link from 'next/link';

import WelcomeStats from './welcomeStats/page';
import TemporaryDrawer from './ui/navbar';
import SignIn from './signin/page'

export default function App() {
  return (
    <div>
        <TemporaryDrawer />
        <WelcomeStats />
    </div>
  );
}
