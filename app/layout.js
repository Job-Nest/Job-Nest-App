import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }) {

      const PG_URI = process.env.POSTGRES_URL;
      console.log(PG_URI);

  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
