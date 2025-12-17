import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { UserRole } from '@/types/roles'; // Assuming UserRole is defined here

const usersFilePath = path.join(process.cwd(), 'src/data/users.json');

interface User {
  id: string;
  email: string;
  password?: string; // Password will not be sent back to client
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
  const { email, password, companyName, gstin } = await request.json();

  if (!email || !password || !companyName || !gstin) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  let users = await readUsers();

  if (users.some(user => user.email === email)) {
    return NextResponse.json({ message: 'User with this email already exists' }, { status: 409 });
  }

  const newUser: User = {
    id: `user-${Date.now()}`,
    email,
    password, // In a real app, this would be hashed
    role: UserRole.REGULAR, // Default role for new signups
    companyName,
    gstin,
  };

  users.push(newUser);
  await writeUsers(users);

  // Return user data without the password for security
  const { password: _, ...userWithoutPassword } = newUser;
  return NextResponse.json(userWithoutPassword, { status: 201 });
}
