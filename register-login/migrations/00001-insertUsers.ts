import { Sql } from 'postgres';

const testUsers = [
  { id: 1, name: 'Alice', passwordHash: 'password' },
  { id: 2, name: 'Bob', passwordHash: 'password' },
  { id: 3, name: 'Carol', passwordHash: 'password' },
];

export async function up(sql: Sql) {
  for (const testUser of testUsers) {
    await sql`
    INSERT INTO users(name, password_hash)
    VALUES
    (
      ${testUser.name},
      ${testUser.passwordHash}
    )
  `;
  }
}

export async function down(sql: Sql) {
  for (const testUser of testUsers) {
    await sql`
      DELETE FROM animals
      WHERE
        id = ${testUser.id}
    `;
  }
}
