import React from 'react';
import { Heart, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0f172a', padding: '3rem 0' }}>
      <div className="container">
        <div className="text-center">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <Code size={20} color="#3b82f6" style={{ marginRight: '0.5rem' }} />
            <span className="text-secondary">Made with</span>
            <Heart size={20} color="#ef4444" style={{ margin: '0 0.5rem', fill: '#ef4444' }} />
            <span className="text-secondary">by Mono</span>
          </div>

          <p className="text-muted" style={{ fontSize: '0.875rem', margin: 0, color: '#f9fafb' }}>
            © {new Date().getFullYear()} Mono. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
