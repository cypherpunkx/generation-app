import db from '@/configs/db';

export const find = async (offset: number, limit: number) => {
  const sql = 'SELECT * FROM customer LIMIT ?,?';
  const [results, fields] = await db.execute(sql, [offset, limit]);

  return results;
};
