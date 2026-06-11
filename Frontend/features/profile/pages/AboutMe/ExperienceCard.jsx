import React, { useState } from 'react';
import styles from './AboutMe.module.css';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const ExperienceCard = ({ exp }) => {
  const {
    companyName,
    role,
    description,
    startDate,
    endDate,
    companyLogo
  } = exp;

  const logoUrl = companyLogo?.url
    ? `${STRAPI_URL}${companyLogo.url}`
    : null;

  const [open, setOpen] = useState(false);

  const bullets = description
    ? description.split('\n').map(l => l.trim()).filter(Boolean)
    : [];

  const hasDescription = bullets.length > 0;

  return (
    <div className={styles.expCard}>
      <div className="d-flex align-items-start gap-3">

        {/* Logo */}
        <div className={styles.expLogo}>
          {logoUrl ? (
            <img src={logoUrl} alt={companyName} />
          ) : (
            <span className={styles.expLogoFallback}>
              {companyName?.charAt(0)}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-grow-1">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start gap-1">

            <div>
              <h4 className={styles.expCompany}>
                {companyName}
              </h4>

              {role && (
                <p className={styles.expPosition}>
                  {role}
                </p>
              )}
            </div>

            <div className="d-flex align-items-center gap-2">
              <span className={styles.expDate}>
                {formatDate(startDate)}
                {endDate
                  ? ` – ${formatDate(endDate)}`
                  : ' – Present'}

                {!endDate && (
                  <span className={styles.expCurrent}>
                    {' '} (Current)
                  </span>
                )}
              </span>

              {hasDescription && (
                <button
                  className={`${styles.toggleBtn} ${
                    open ? styles.toggleBtnOpen : ''
                  }`}
                  onClick={() => setOpen(prev => !prev)}
                  aria-expanded={open}
                  aria-label={
                    open
                      ? 'Collapse details'
                      : 'Expand details'
                  }
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M2 5L7 10L12 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Description */}
      {hasDescription && (
        <div
          className={`${styles.expCollapse} ${
            open ? styles.expCollapseOpen : ''
          }`}
        >
          <ul className={styles.expBullets}>
            {bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default ExperienceCard;