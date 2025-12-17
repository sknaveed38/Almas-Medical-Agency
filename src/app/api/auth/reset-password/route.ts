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

async function writeUsers(users: User[]): Promise<void> {
  try {
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Error writing users data:', error);
  }
}

export async function POST(request: Request) {
  const { email, newPassword, token } = await request.json();

  if (!email || !newPassword || !token) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  // In a real application, you would validate the token here.
  // For this simulation, we'll just check if a token is present.
  if (token !== 'simulated-reset-token') { // Use a fixed token for simulation
    return NextResponse.json({ message: 'Invalid or expired reset token' }, { status: 400 });
  }

  let users = await readUsers();
  const userIndex = users.findIndex(u => u.email === email);

  if (userIndex !== -1) {
    users[userIndex].password = newPassword; // In a real app, hash this password
    await writeUsers(users);
    return NextResponse.json({ message: 'Password has been reset successfully' });
  } else {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }
}
