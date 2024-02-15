import { Inter } from 'next/font/google';
import './globals.css';
// import { AppRouterCacheProvider } from '@mui/material-next-js/v13-appRouter';
// import { ThemeProvider } from '@mui/material/styles';
// import theme from './theme';
const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }) {
  return (
    <html lang='en'>
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
