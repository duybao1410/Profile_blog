import React, { useEffect, useRef, useState } from 'react';
import styles from './AboutMe.module.css';
import EducationCard from './EducationCard';
import ExperienceCard from './ExperienceCard';
import CertCard from './CertCard';
import ProjectCard from './ProjectCard';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

// ── Helper: format date "10/2023" → "Oct 2023" ──
const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

// ────────────────────────────────────────────
// Main component: AboutMe
// ────────────────────────────────────────────
const AboutMe = () => {
  const sectionRef = useRef(null);

  const [profile, setProfile] = useState(null);
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [certifications, setCertifications] = useState([]);

  // Fetch data từ Strapi
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [profileRes, eduRes, expRes, projRes, certRes] = await Promise.all([
          fetch(`${STRAPI_URL}/api/profiles?populate=avatar`),
          fetch(`${STRAPI_URL}/api/educations?populate=logo&sort=startDate:desc`),
          fetch(`${STRAPI_URL}/api/experiences?populate=companyLogo&sort=startDate:desc`),
          fetch(`${STRAPI_URL}/api/projects?populate=thumbnail&sort=startDate:desc`),
          fetch(`${STRAPI_URL}/api/certificates?populate=organization_logo`),
        ]);

        if (!profileRes.ok) throw new Error(`Profile error: ${profileRes.status}`);
        if (!eduRes.ok)     throw new Error(`Education error: ${eduRes.status}`);
        if (!expRes.ok)     throw new Error(`Experience error: ${expRes.status}`);
        if (!projRes.ok)    throw new Error(`Project error: ${projRes.status}`);
        if (!certRes.ok)    throw new Error(`Certification error: ${certRes.status}`);

        const [profileJson, eduJson, expJson, projJson, certJson] = await Promise.all([
          profileRes.json(),
          eduRes.json(),
          expRes.json(),
          projRes.json(),
          certRes.json(),
        ]);

        setProfile(profileJson?.data?.[0] ?? null);
        setEducations(eduJson?.data ?? []);
        setExperiences(expJson?.data ?? []);
        setProjects(projJson?.data ?? []);
        setCertifications(certJson?.data ?? []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  // Fade-in observer
  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add(styles.visible);
      }),
      { threshold: 0.1 }
    );
    sectionRef.current
      ?.querySelectorAll(`.${styles.fadeIn}`)
      .forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]);

  const avatarUrl = profile?.avatar?.url
    ? `${STRAPI_URL}${profile.avatar.url}`
    : null;

  // ── Loading ──
  if (loading) {
    return (
      <section className={styles.aboutSection}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <div className={`${styles.skeleton} ${styles.skeletonPill} mx-auto mb-3`} />
              <div className={`${styles.skeleton} ${styles.skeletonHeading} mx-auto mb-3`} />
              <div className={`${styles.skeleton} ${styles.skeletonText} mx-auto mb-2`} />
              <div className={`${styles.skeleton} ${styles.skeletonText} mx-auto mb-2`} style={{ width: '70%' }} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ── Error ──
  if (error) {
    return (
      <section className={styles.aboutSection}>
        <div className="container text-center">
          <p className="text-danger">Error: {error}</p>
        </div>
      </section>
    );
  }

  const {
    full_name, headline, bio,
    location, phone,
    github_url, linkedin_url, facebook_url, website_url,
  } = profile || {};

  return (
    <section className={styles.aboutSection} ref={sectionRef} id="about">
      <div className="container">

        {/* ── 1. Hero: Tên bên trái, Ảnh bên phải ── */}
        <div className={`row justify-content-center align-items-center mb-5 mx-auto ${styles.fadeIn}`} style={{ maxWidth: '960px' }}>
          
          {/* Khối Chữ */}
          <div className="col-12 col-md-7 text-center text-md-start pe-md-4">
            {full_name && (
              <h1 className={styles.heroName}>
                Hi, I'm {full_name}
              </h1>
            )}
            {headline && <p className={styles.heroHeadline}>{headline}</p>}
            
            {/* Hàng thông tin liên hệ */}
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 mt-2">
              {location && <span className={styles.contactItem}>📍 {location}</span>}
              {phone && (
                <a href={`tel:${phone}`} className={styles.contactItem}>
                  📞 {phone}
                </a>
              )}
            </div>
            
            {/* Hàng mạng xã hội */}
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-2 mt-3">
              {github_url && (
                <a href={github_url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  GitHub
                </a>
              )}
              {linkedin_url && (
                <a href={linkedin_url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  LinkedIn
                </a>
              )}
              {facebook_url && (
                <a href={facebook_url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  Facebook
                </a>
              )}
              {website_url && (
                <a href={website_url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  Website
                </a>
              )}
            </div>
          </div>

          {/* Khối Ảnh */}
          {avatarUrl && (
            <div className="col-12 col-md-5 text-center text-md-end mt-4 mt-md-0 ps-md-4">
              <img
                src={avatarUrl}
                alt={full_name || 'Avatar'}
                className={styles.avatar}
              />
            </div>
          )}
        </div>

        {/* ── 2. About Me ── */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-md-12 col-lg-8">
            <div className={`${styles.fadeIn} mb-3`}>
              <span className={styles.sectionLabel}>About Me</span>
            </div>
            <h2 className={`${styles.fadeIn} ${styles.heading} mb-3`}>Who I Am</h2>
            {bio && (
              <p className={`${styles.fadeIn} ${styles.subtitle} mb-4`}>{bio}</p>
            )}
            <hr className={`${styles.fadeIn} ${styles.divider} mb-0`} />
          </div>
        </div>

        {/* ── 3. Education ── */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-8">
            <div className={`${styles.fadeIn} text-center mb-4`}>
              <span className={styles.sectionLabel}>Education</span>
            </div>
            <h2 className={`${styles.fadeIn} ${styles.heading} text-center mb-4`}>
              Academic Background
            </h2>
            
            {educations.length === 0 ? (
              <p className={`${styles.fadeIn} text-muted text-center`}>No education records found.</p>
            ) : (
              <div className="d-flex flex-column gap-3">
                {educations.map((edu) => (
                  <div key={edu.id} className={styles.fadeIn}>
                    <EducationCard edu={edu} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      
        {/* ── 4. Experience ── */}
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-12 col-lg-8">
            <div className={`${styles.fadeIn} text-center mb-4`}>
              <span className={styles.sectionLabel}>Experience</span>
            </div>
            <h2 className={`${styles.fadeIn} ${styles.heading} text-center mb-4`}>
              My experience journey 
            </h2>
            
            {experiences.length === 0 ? (
              <p className={`${styles.fadeIn} text-muted text-center`}>No experience records found.</p>
            ) : (
              <div className="d-flex flex-column gap-3">
                {experiences.map((exp) => (
                  <div key={exp.id} className={styles.fadeIn}>
                    <ExperienceCard exp={exp} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
         
        {/* ── 5. Certifications ── */}
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-12 col-lg-8">
            <div className={`${styles.fadeIn} text-center mb-4`}>
              <span className={styles.sectionLabel}>Certifications</span>
            </div>
            <h2 className={`${styles.fadeIn} ${styles.heading} text-center mb-4`}>
              My Certifications
            </h2>
            
            {certifications.length === 0 ? (
              <p className={`${styles.fadeIn} text-muted text-center`}>No certification records found.</p>
            ) : (
              <div className="d-flex flex-column gap-3">
                {certifications.map((cert) => (
                  <div key={cert.id} className={styles.fadeIn}>
                    <CertCard cert={cert} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── 6. Projects ── */}
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-12 col-lg-8">
            <div className={`${styles.fadeIn} text-center mb-4`}>
              <span className={styles.sectionLabel}>Projects</span>
            </div>
            <h2 className={`${styles.fadeIn} ${styles.heading} text-center mb-4`}>
              My Projects
            </h2>
            
            {projects.length === 0 ? (
              <p className={`${styles.fadeIn} text-muted text-center`}>No project records found.</p>
            ) : (
              <div className="d-flex flex-column gap-3">
                {projects.map((proj) => (
                  <div key={proj.id} className={styles.fadeIn}>
                    <ProjectCard project={proj} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div> 
    </section>
  );
};

export default AboutMe;