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

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 });
  }

  const users = await readUsers();
  const user = users.find(u => u.email === email);

  if (user) {
    // In a real application, a password reset token would be generated
    // and an email would be sent to the user with a reset link.
    console.log(`Simulating: Password reset email sent to ${email}`);
    return NextResponse.json({ message: 'If a user with that email exists, a password reset link has been sent.' });
  } else {
    // For security, always return a generic success message even if user not found
    return NextResponse.json({ message: 'If a user with that email exists, a password reset link has been sent.' });
  }
}
