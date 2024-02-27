import { ExpoRequest, ExpoResponse } from 'expo-router/server';
import { getUsers } from '../database/users';

export async function POST(request: ExpoRequest) {
  const body = await request.json();
  console.log(body);
  const a = await getUsers();
  return ExpoResponse.json({ message: a });
}
