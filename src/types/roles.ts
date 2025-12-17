export enum UserRole {
  REGULAR = 'Regular',
  WHOLESALER = 'Wholesaler',
  DISTRIBUTOR = 'Distributor',
  ADMIN = 'Admin', // Added Admin role
}

export const roles = [UserRole.REGULAR, UserRole.WHOLESALER, UserRole.DISTRIBUTOR, UserRole.ADMIN];