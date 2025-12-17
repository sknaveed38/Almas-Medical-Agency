export interface UserProfile {
  id: string;
  name: string;
  email: string;
  companyName: string;
  gstin: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  role: string; // Corresponds to UserRole
}

export const mockUserProfile: UserProfile = {
  id: 'USR001',
  name: 'Shafiya Shaik',
  email: 'shafiya.shaik@example.com',
  companyName: 'Pharma Solutions Inc.',
  gstin: '22ABCDE1234F1Z5',
  phone: '+91 98765 43210',
  address: {
    street: '123 Pharma Road',
    city: 'Health City',
    state: 'State',
    zip: '123456',
  },
  role: 'Wholesaler', // Example role
};
