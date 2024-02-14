import { db } from '@vercel/postgres';

export default async function handler(request, response) {
  const client = await db.connect();
  let returnThis = 'test';
  try {
    let data = await client.sql`SELECT DISTINCT * FROM Jobs;`;
    returnThis = data;
  } catch (error) {
    return response.status(500).json({ error });
  }
    console.log(returnThis.rows);
  return returnThis.rows;
}
