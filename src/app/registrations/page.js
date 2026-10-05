'use client';

import { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';

const sampleRegistrations = [
  { id: '1', fullName: 'Priya Sharma', email: 'priya@email.com', phone: '+91 98765 43210', competition: 'Hindustani Vocal – Senior', status: 'PENDING', createdAt: '2025-12-15', city: 'Pune' },
  { id: '2', fullName: 'Arjun Deshmukh', email: 'arjun@email.com', phone: '+91 87654 32109', competition: 'Tabla Solo', status: 'CONFIRMED', createdAt: '2025-12-14', city: 'Mumbai' },
  { id: '3', fullName: 'Sneha Kulkarni', email: 'sneha@email.com', phone: '+91 76543 21098', competition: 'Kathak – Junior', status: 'PENDING', createdAt: '2025-12-13', city: 'Pune' },
  { id: '4', fullName: 'Rahul Patil', email: 'rahul@email.com', phone: '+91 65432 10987', competition: 'Harmonium Solo', status: 'CONFIRMED', createdAt: '2025-12-12', city: 'Nashik' },
  { id: '5', fullName: 'Meera Joshi', email: 'meera@email.com', phone: '+91 54321 09876', competition: 'Hindustani Vocal – Junior', status: 'REJECTED', createdAt: '2025-12-11', city: 'Kolhapur' },
  { id: '6', fullName: 'Aditya Kelkar', email: 'aditya@email.com', phone: '+91 43210 98765', competition: 'Tabla Solo', status: 'CONFIRMED', createdAt: '2025-12-10', city: 'Pune' },
  { id: '7', fullName: 'Sakshi More', email: 'sakshi@email.com', phone: '+91 32109 87654', competition: 'Kathak – Senior', status: 'PENDING', createdAt: '2025-12-09', city: 'Nagpur' },
  { id: '8', fullName: 'Vikram Bhosale', email: 'vikram@email.com', phone: '+91 21098 76543', competition: 'Hindustani Vocal – Senior', status: 'CONFIRMED', createdAt: '2025-12-08', city: 'Pune' },
];

export default function RegistrationsPage() {
  const [filter, setFilter] = useState('ALL');
  const [search, setSearch] = useState('');

  const filtered = sampleRegistrations.filter(reg => {
    const matchesFilter = filter === 'ALL' || reg.status === filter;
    const matchesSearch = reg.fullName.toLowerCase().includes(search.toLowerCase()) ||
                          reg.email.toLowerCase().includes(search.toLowerCase()) ||
                          reg.competition.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-main">
        <div className="admin-topbar">
          <h1>Registrations</h1>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <div className="admin-search">
              <span>🔍</span>
              <input placeholder="Search by name, email..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <button className="admin-btn admin-btn--outline admin-btn--sm">Export CSV</button>
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {['ALL', 'PENDING', 'CONFIRMED', 'REJECTED'].map(f => (
            <button
              key={f}
              className={`admin-btn ${filter === f ? 'admin-btn--primary' : 'admin-btn--outline'} admin-btn--sm`}
              onClick={() => setFilter(f)}
            >
              {f === 'ALL' ? 'All' : f.charAt(0) + f.slice(1).toLowerCase()} ({f === 'ALL' ? sampleRegistrations.length : sampleRegistrations.filter(r => r.status === f).length})
            </button>
          ))}
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Competition</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(reg => (
                <tr key={reg.id}>
                  <td style={{ fontWeight: 500, color: '#2D2926' }}>{reg.fullName}</td>
                  <td>{reg.competition}</td>
                  <td>{reg.email}</td>
                  <td>{reg.phone}</td>
                  <td>{reg.city}</td>
                  <td>{reg.createdAt}</td>
                  <td>
                    <span className={`admin-badge admin-badge--${reg.status.toLowerCase()}`}>
                      {reg.status}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.35rem' }}>
                      <button className="admin-btn admin-btn--outline admin-btn--sm">View</button>
                      <button className="admin-btn admin-btn--gold admin-btn--sm">✓</button>
                      <button className="admin-btn admin-btn--outline admin-btn--sm" style={{ color: '#C45B5B' }}>✕</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
