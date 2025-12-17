export const creditStatus = {
  creditLimit: 500000,
  outstandingBalance: 125750,
  availableCredit: 374250,
  dueDate: '2025-12-25',
};

export const ledgerTransactions = [
  {
    id: 'TXN001',
    date: '2025-11-05',
    description: 'Invoice #INV-2025-001',
    debit: 75000,
    credit: 0,
    balance: 75000,
  },
  {
    id: 'TXN002',
    date: '2025-11-12',
    description: 'Invoice #INV-2025-002',
    debit: 50750,
    credit: 0,
    balance: 125750,
  },
  {
    id: 'TXN003',
    date: '2025-11-15',
    description: 'Payment Received - NEFT',
    debit: 0,
    credit: 50000,
    balance: 75750,
  },
  {
    id: 'TXN004',
    date: '2025-11-20',
    description: 'Invoice #INV-2025-003',
    debit: 80000,
    credit: 0,
    balance: 155750,
  },
  {
    id: 'TXN005',
    date: '2025-11-28',
    description: 'Credit Note #CN-2025-001',
    debit: 0,
    credit: 30000,
    balance: 125750,
  },
];
