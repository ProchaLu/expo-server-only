import { cache } from 'react';
import { User } from '../migrations/00000-createTableUsers';
import { sql } from './connect';

export const getUsers = cache(async () => {
  const users = await sql<User[]>`
    SELECT
      *
    FROM
      users
    ORDER BY
      id
  `;

  return users;
});