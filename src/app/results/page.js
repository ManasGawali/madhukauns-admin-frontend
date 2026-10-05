'use client';

import AdminSidebar from '@/components/AdminSidebar';

export default function ResultsPage() {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-main">
        <div className="admin-topbar">
          <h1>Publish Results</h1>
          <button className="admin-btn admin-btn--gold">Publish Results</button>
        </div>

        <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', border: '1px solid #EDE6D8' }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", marginBottom: '1.5rem' }}>Select Competition</h3>
          
          <div className="admin-form-group">
            <label className="admin-form-label">Competition</label>
            <select className="admin-form-input">
              <option value="">Choose a competition...</option>
              <option>Harmonium Solo (3 Jan 2026)</option>
              <option>Vocal – Junior (3 Jan 2026)</option>
              <option>Vocal – Senior (4 Jan 2026)</option>
              <option>Kathak – Junior (10 Jan 2026)</option>
              <option>Kathak – Senior (10 Jan 2026)</option>
              <option>Tabla Solo (11 Jan 2026)</option>
            </select>
          </div>

          <div style={{ display: 'grid', gap: '1.5rem', marginTop: '2rem' }}>
            {[
              { position: '1st Prize 🥇', color: '#C4A35A' },
              { position: '2nd Prize 🥈', color: '#9B958E' },
              { position: '3rd Prize 🥉', color: '#D4944C' }
            ].map((prize, i) => (
              <div key={i} style={{ padding: '1.25rem', background: '#FAF7F2', borderRadius: '8px', border: `2px solid ${prize.color}20` }}>
                <h4 style={{ fontFamily: "'Playfair Display', serif", marginBottom: '1rem', color: prize.color }}>
                  {prize.position}
                </h4>
                <div className="admin-form-group" style={{ marginBottom: 0 }}>
                  <label className="admin-form-label">Select Winner</label>
                  <select className="admin-form-input">
                    <option value="">Choose participant...</option>
                    <option>Priya Sharma (Reg #001)</option>
                    <option>Arjun Deshmukh (Reg #002)</option>
                    <option>Rahul Patil (Reg #004)</option>
                    <option>Vikram Bhosale (Reg #008)</option>
                  </select>
                </div>
                <div className="admin-form-group" style={{ marginTop: '0.75rem', marginBottom: 0 }}>
                  <label className="admin-form-label">Remarks (optional)</label>
                  <input type="text" className="admin-form-input" placeholder="Judge's remarks..." />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
