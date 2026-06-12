import React from 'react';
import styles from './AboutMe.module.css';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const ProjectCard = ({ project }) => {
  const {
    title,
    shortDescription,
    demoURL,
    sourcecodeURL,
    startDate,
    endDate,
    project_technologies,
    thumbnail,
  } = project;

 // const imgUrl = thumbnail?.url ? `${STRAPI_URL}${thumbnail.url}` : null;

  const hasThumbnail = Array.isArray(thumbnail) && thumbnail.length > 0;
  const imgUrl = hasThumbnail && thumbnail[0]?.url 
    ? `${STRAPI_URL}${thumbnail[0].url}` 
    : null;

const techs = project_technologies?.project_technologies && Array.isArray(project_technologies.project_technologies)
    ? project_technologies.project_technologies
    : [];

  const dateRange = [
    startDate ? formatDate(startDate) : null,
    endDate   ? formatDate(endDate)   : 'Present',
  ].filter(Boolean).join(' - ');

  return (
    <div className={styles.projectCard}>

      {/* ── Thumbnail ── */}
      <div className={styles.projectThumb}>
        {imgUrl ? (
          <img src={imgUrl} alt={title} />
        ) : (
          <div className={styles.projectThumbPlaceholder}>
            {/* placeholder icon */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect x="4" y="8" width="32" height="24" rx="3" stroke="#ccc" strokeWidth="2"/>
              <circle cx="14" cy="17" r="3" stroke="#ccc" strokeWidth="2"/>
              <path d="M4 28l9-8 6 6 5-5 12 9" stroke="#ccc" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
          </div>
        )}

        {/* Link buttons overlay */}
        <div className={styles.projectOverlay}>
          {demoURL && (
            <a href={demoURL} target="_blank" rel="noopener noreferrer" className={styles.projectOverlayBtn}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 1c-1.5 2-2 3.5-2 6s.5 4 2 6M7 1c1.5 2 2 3.5 2 6s-.5 4-2 6M1 7h12" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              Website
            </a>
          )}
          {sourcecodeURL && (
            <a href={sourcecodeURL} target="_blank" rel="noopener noreferrer" className={styles.projectOverlayBtn}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 1.5a5.5 5.5 0 011.5 10.8c-.3.05-.4-.12-.4-.27v-1.87c0-.64-.22-1.05-.47-1.27 1.54-.17 3.16-.75 3.16-3.4 0-.75-.27-1.37-.71-1.85.07-.18.31-.88-.07-1.83 0 0-.58-.19-1.9.7a6.6 6.6 0 00-3.46 0C5.43 2.08 4.85 2.27 4.85 2.27c-.38.95-.14 1.65-.07 1.83-.44.48-.71 1.1-.71 1.85 0 2.64 1.61 3.23 3.14 3.42-.2.17-.38.48-.44.93-.4.18-1.4.48-2.02-.57 0 0-.37-.66-1.06-.71 0 0-.67-.01-.05.42 0 0 .45.21.76.99 0 0 .4 1.32 2.34.88v1.3c0 .15-.11.32-.4.27A5.5 5.5 0 019 1.5z" fill="currentColor"/>
              </svg>
              Source
            </a>
          )}
        </div>
      </div>

      {/* ── Body ── */}
      <div className={styles.projectBody}>

        {/* Title row */}
        <div className="d-flex justify-content-between align-items-start gap-2 mb-1">
          <h4 className={styles.projectTitle}>{title}</h4>
          {(demoURL || sourcecodeURL) && (
            <a
              href={demoURL || sourcecodeURL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectArrow}
              aria-label="Open project"
            >
              ↗
            </a>
          )}
        </div>

        {/* Date */}
        {dateRange && (
          <p className={styles.projectDate}>{dateRange}</p>
        )}

        {/* Short description */}
        {shortDescription && (
          <p className={styles.projectDesc}>{shortDescription}</p>
        )}

        {/* Tech tags */}
        {techs.length > 0 && (
          <div className={styles.projectTags}>
            {techs.map((tech, i) => (
              <span key={i} className={styles.projectTag}>{tech}</span>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default ProjectCard;