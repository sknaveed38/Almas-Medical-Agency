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

export async function GET(request: Request) {
  const token = request.headers.get('Authorization')?.split(' ')[1]; // Assuming "Bearer <token>"

  if (!token) {
    return NextResponse.json({ message: 'Authentication required' }, { status: 401 });
  }

  // In a real app, you would verify the JWT token and extract user information.
  // For this simulation, we'll assume the token uniquely identifies a user
  // and we can find the user based on some simulated logic from the token.
  // For now, let's assume the token itself contains the user's email for simplicity.
  // A more robust simulation might map a simulated token to a user ID.

  const users = await readUsers();
  const user = users.find(u => token.includes(u.id)); // Simple simulation: token includes user ID

  if (user) {
    const { password: _, ...userWithoutPassword } = user;
    return NextResponse.json(userWithoutPassword);
  } else {
    return NextResponse.json({ message: 'User not found or invalid token' }, { status: 404 });
  }
}
