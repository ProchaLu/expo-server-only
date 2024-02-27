import { Sql } from 'postgres';

export type User = {
  id: number;
  name: string;
  passwordHash: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE users (
      id integer PRIMARY key generated always AS identity,
      name varchar(30) NOT NULL,
      password_hash varchar(60) NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE users `;
}
