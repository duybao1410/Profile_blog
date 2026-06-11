import React, { useState } from 'react';
import styles from './AboutMe.module.css';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const EducationCard = ({ edu }) => {
  const { institution, degree, description, startDate, endDate, logo } = edu;
  const logoUrl = logo?.url ? `${STRAPI_URL}${logo.url}` : null;
  const [open, setOpen] = useState(false);

  const bullets = description
    ? description.split('\n').map(l => l.trim()).filter(Boolean)
    : [];

  const hasDescription = bullets.length > 0;

  return (
    <div className={styles.eduCard}>
      {/* ── Header row (always visible) ── */}
      <div className="d-flex align-items-start gap-3">

        {/* Logo */}
        <div className={styles.eduLogo}>
          {logoUrl
            ? <img src={logoUrl} alt={institution} />
            : <span className={styles.eduLogoFallback}>{institution?.charAt(0)}</span>
          }
        </div>

        {/* Content */}
        <div className="flex-grow-1">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start gap-1">
            <div>
              <h4 className={styles.eduInstitution}>{institution}</h4>
              {degree && <p className={styles.eduDegree}>{degree}</p>}
            </div>
            <div className="d-flex align-items-center gap-2">
              <span className={styles.eduDate}>
                {formatDate(startDate)}
                {endDate ? ` – ${formatDate(endDate)}` : ' – Present'}
                {endDate && new Date(endDate) > new Date() && (
                  <span className={styles.eduExpected}> (Expected)</span>
                )}
              </span>

              {/* Toggle button — chỉ hiện nếu có description */}
              {hasDescription && (
                <button
                  className={`${styles.toggleBtn} ${open ? styles.toggleBtnOpen : ''}`}
                  onClick={() => setOpen(prev => !prev)}
                  aria-expanded={open}
                  aria-label={open ? 'Collapse details' : 'Expand details'}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 5L7 10L12 5" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      

      {/* ── Collapsible description ── */}
      {hasDescription && (
        <div className={`${styles.eduCollapse} ${open ? styles.eduCollapseOpen : ''}`}>
          <ul className={styles.eduBullets}>
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EducationCard;