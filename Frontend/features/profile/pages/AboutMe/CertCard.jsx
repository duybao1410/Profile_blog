import React from 'react';
import styles from './AboutMe.module.css';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

// ── Helper: format date "10/2023" → "Oct 2023" ──
const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const CertCard = ({ cert }) => {
  const {
    title,
    organization,
    dateAchieved,
    organization_logo,
    link
  } = cert;

  // Hỗ trợ bóc tách linh hoạt cấu trúc data trả về từ Strapi
  const logoData = organization_logo?.url || cert.logo?.url;
  const logoUrl = logoData ? `${STRAPI_URL}${logoData}` : null;

  return (
    <div className={styles.certCard}>
      {/* ── Header row (always visible) ── */}
      <div className="d-flex align-items-start gap-3">

        {/* Logo */}
        <div className={styles.certLogo}>
          {logoUrl ? (
            <img src={logoUrl} alt={organization} />
          ) : (
            <span className={styles.certLogoFallback}>
              {organization?.charAt(0)}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-grow-1">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start gap-1">

            {/* Title & Organization */}
            <div>
              <h4 className={styles.certTitle}>
                {title}
              </h4>
              {organization && (
                <p className={styles.certOrg}>
                  {organization}
                </p>
              )}
            </div>

            {/* Date & Verify Link */}
            <div className="d-flex align-items-center gap-2">
              {dateAchieved && (
                <span className={styles.certDate}>
                  {formatDate(dateAchieved)}
                </span>
              )}

              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.certLink}
                >
                  Verify ↗
                </a>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CertCard;