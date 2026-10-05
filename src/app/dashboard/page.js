'use client';

import { useState, useEffect } from 'react';
import AdminSidebar from '@/components/AdminSidebar';

// Sample data for demo (in production, fetched from API)
const sampleRegistrations = [
  { id: '1', fullName: 'Priya Sharma', email: 'priya@email.com', phone: '+91 98765 43210', competition: 'Vocal – Senior', status: 'PENDING', createdAt: '2025-12-15' },
  { id: '2', fullName: 'Arjun Deshmukh', email: 'arjun@email.com', phone: '+91 87654 32109', competition: 'Tabla Solo', status: 'CONFIRMED', createdAt: '2025-12-14' },
  { id: '3', fullName: 'Sneha Kulkarni', email: 'sneha@email.com', phone: '+91 76543 21098', competition: 'Kathak – Junior', status: 'PENDING', createdAt: '2025-12-13' },
  { id: '4', fullName: 'Rahul Patil', email: 'rahul@email.com', phone: '+91 65432 10987', competition: 'Harmonium Solo', status: 'CONFIRMED', createdAt: '2025-12-12' },
  { id: '5', fullName: 'Meera Joshi', email: 'meera@email.com', phone: '+91 54321 09876', competition: 'Vocal – Junior', status: 'REJECTED', createdAt: '2025-12-11' },
];

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalRegistrations: 47,
    pendingRegistrations: 12,
    confirmedRegistrations: 32,
    rejectedRegistrations: 3,
  });

  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-main">
        <div className="admin-topbar">
          <h1>Dashboard</h1>
          <div className="admin-search">
            <span>🔍</span>
            <input placeholder="Search..." />
          </div>
        </div>

        {/* Stats */}
        <div className="stat-grid">
          <div className="stat-card">
            <div className="stat-icon">📝</div>
            <div className="stat-value">{stats.totalRegistrations}</div>
            <div className="stat-label">Total Registrations</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏳</div>
            <div className="stat-value">{stats.pendingRegistrations}</div>
            <div className="stat-label">Pending</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-value">{stats.confirmedRegistrations}</div>
            <div className="stat-label">Confirmed</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">❌</div>
            <div className="stat-value">{stats.rejectedRegistrations}</div>
            <div className="stat-label">Rejected</div>
          </div>
        </div>

        {/* Competition Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2rem' }}>
          {[
            { name: 'Vocal Senior', count: 18, max: 40, icon: '🎤' },
            { name: 'Vocal Junior', count: 8, max: 20, icon: '🎤' },
            { name: 'Tabla Solo', count: 15, max: 40, icon: '🥁' },
            { name: 'Kathak Junior', count: 6, max: 25, icon: '💃' },
          ].map((comp, i) => (
            <div key={i} className="stat-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>{comp.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.35rem' }}>{comp.name}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ flex: 1, height: '6px', background: '#EDE6D8', borderRadius: '99px', overflow: 'hidden' }}>
                    <div style={{ width: `${(comp.count / comp.max) * 100}%`, height: '100%', background: 'linear-gradient(90deg, #C4A35A, #D4944C)', borderRadius: '99px' }}></div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#9B958E' }}>{comp.count}/{comp.max}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Registrations */}
        <div className="admin-table-wrapper">
          <div className="admin-table-header">
            <h3 className="admin-table-title">Recent Registrations</h3>
            <button className="admin-btn admin-btn--outline admin-btn--sm">View All →</button>
          </div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Competition</th>
                <th>Email</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sampleRegistrations.map(reg => (
                <tr key={reg.id}>
                  <td style={{ fontWeight: 500, color: '#2D2926' }}>{reg.fullName}</td>
                  <td>{reg.competition}</td>
                  <td>{reg.email}</td>
                  <td>{reg.createdAt}</td>
                  <td>
                    <span className={`admin-badge admin-badge--${reg.status.toLowerCase()}`}>
                      {reg.status}
                    </span>
                  </td>
                  <td>
                    <button className="admin-btn admin-btn--outline admin-btn--sm">View</button>
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
