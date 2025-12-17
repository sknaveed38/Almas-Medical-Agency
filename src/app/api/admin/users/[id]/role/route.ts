import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { UserRole } from '@/types/roles';

const usersFilePath = path.join(process.cwd(), 'src/data/users.json');

interface User {
  id: string;
  email: string;
  password?: string;
  role: UserRole;
  companyName?: string;
  gstin?: string;
}

async function readUsers(): Promise<User[]> {
  try {
    const fileContent = await fs.readFile(usersFilePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading users data:', error);
    return [];
  }
}

async function writeUsers(users: User[]) {
  try {
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Error writing users data:', error);
  }
}

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function PUT(request: Request, context: RouteContext) {
  const adminRole = request.headers.get('X-User-Role');
  if (adminRole !== UserRole.ADMIN) {
    return NextResponse.json({ message: 'Forbidden: Admin access required' }, { status: 403 });
  }

  const { id } = await context.params; // Await context.params
  const { role: newRole } = await request.json();

  if (!Object.values(UserRole).includes(newRole)) {
    return NextResponse.json({ message: 'Invalid role provided' }, { status: 400 });
  }

  let users = await readUsers();
  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex === -1) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  users[userIndex].role = newRole;
  await writeUsers(users);

  // Return the updated user without sensitive info like password
  const { password, ...updatedUser } = users[userIndex];
  return NextResponse.json(updatedUser);
}
