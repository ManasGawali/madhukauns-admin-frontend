'use client';

import AdminSidebar from '@/components/AdminSidebar';

const competitions = [
  { id: '1', name: 'Harmonium Solo', type: 'HARMONIUM', ageGroup: 'OPEN', date: '3 Jan 2026', entries: 12, max: 30, status: 'OPEN' },
  { id: '2', name: 'Vocal – Junior', type: 'VOCAL', ageGroup: 'JUNIOR', date: '3 Jan 2026', entries: 8, max: 20, status: 'OPEN' },
  { id: '3', name: 'Vocal – Senior', type: 'VOCAL', ageGroup: 'SENIOR', date: '4 Jan 2026', entries: 18, max: 40, status: 'OPEN' },
  { id: '4', name: 'Kathak – Junior', type: 'KATHAK', ageGroup: 'JUNIOR', date: '10 Jan 2026', entries: 6, max: 25, status: 'OPEN' },
  { id: '5', name: 'Kathak – Senior', type: 'KATHAK', ageGroup: 'SENIOR', date: '10 Jan 2026', entries: 3, max: 25, status: 'OPEN' },
  { id: '6', name: 'Tabla Solo', type: 'TABLA', ageGroup: 'OPEN', date: '11 Jan 2026', entries: 15, max: 40, status: 'OPEN' },
];

const typeIcons = { VOCAL: '🎤', TABLA: '🥁', KATHAK: '💃', HARMONIUM: '🎹' };

export default function CompetitionsPage() {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-main">
        <div className="admin-topbar">
          <h1>Competitions</h1>
          <button className="admin-btn admin-btn--primary">+ New Competition</button>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th></th>
                <th>Competition</th>
                <th>Type</th>
                <th>Age Group</th>
                <th>Date</th>
                <th>Entries</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {competitions.map(comp => (
                <tr key={comp.id}>
                  <td style={{ fontSize: '1.5rem' }}>{typeIcons[comp.type]}</td>
                  <td style={{ fontWeight: 500, color: '#2D2926' }}>{comp.name}</td>
                  <td>{comp.type}</td>
                  <td>{comp.ageGroup}</td>
                  <td>{comp.date}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '80px', height: '6px', background: '#EDE6D8', borderRadius: '99px', overflow: 'hidden' }}>
                        <div style={{ width: `${(comp.entries / comp.max) * 100}%`, height: '100%', background: 'linear-gradient(90deg, #C4A35A, #D4944C)', borderRadius: '99px' }}></div>
                      </div>
                      <span style={{ fontSize: '0.8rem', color: '#9B958E' }}>{comp.entries}/{comp.max}</span>
                    </div>
                  </td>
                  <td>
                    <span className={`admin-badge admin-badge--${comp.status.toLowerCase()}`}>
                      {comp.status}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.35rem' }}>
                      <button className="admin-btn admin-btn--outline admin-btn--sm">Edit</button>
                      <button className="admin-btn admin-btn--outline admin-btn--sm">{comp.status === 'OPEN' ? 'Close' : 'Open'}</button>
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
