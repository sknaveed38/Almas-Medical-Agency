import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { UserRole } from '@/types/roles'; // Assuming UserRole enum is defined here

const usersFilePath = path.join(process.cwd(), 'src/data/users.json');

interface User {
  id: string;
  email: string;
  password?: string; // Should be hashed in a real app
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
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
  }

  const users = await readUsers();
  const adminUser = users.find(
    (user) => user.email === email && user.role === UserRole.ADMIN
  );

  if (!adminUser) {
    return NextResponse.json({ message: 'Invalid credentials or not an admin' }, { status: 401 });
  }

  // In a real application, you would hash the password and compare it securely
  // For this example, we'll do a direct comparison.
  // We need to ensure the adminUser.password is available for comparison.
  // If password is not stored in users.json or not provided during creation,
  // this comparison will fail. For now, assuming it exists.
  if (adminUser.password !== password) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  // For simplicity, return a dummy token. In a real app, generate a JWT.
  const token = `admin-token-${adminUser.id}`;

  return NextResponse.json({
    message: 'Login successful',
    token,
    role: UserRole.ADMIN,
    user: {
      id: adminUser.id,
      email: adminUser.email,
      companyName: adminUser.companyName,
      gstin: adminUser.gstin,
    },
  });
}