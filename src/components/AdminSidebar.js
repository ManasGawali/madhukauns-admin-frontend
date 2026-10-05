'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/dashboard', icon: '📊', label: 'Dashboard' },
  { href: '/registrations', icon: '📝', label: 'Registrations' },
  { href: '/competitions', icon: '🏆', label: 'Competitions' },
  { href: '/results', icon: '🎖️', label: 'Results' },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    window.location.href = '/login';
  };

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-brand">
        <h2>🎵 मधुकौंस</h2>
        <p>Admin Dashboard</p>
      </div>
      <nav className="admin-nav">
        {navItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={`admin-nav-link ${pathname === item.href ? 'active' : ''}`}
          >
            <span className="admin-nav-icon">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
      <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <button
          onClick={handleLogout}
          className="admin-nav-link"
          style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '0.75rem 0', textAlign: 'left' }}
        >
          <span className="admin-nav-icon">🚪</span>
          Logout
        </button>
      </div>
    </aside>
  );
}
