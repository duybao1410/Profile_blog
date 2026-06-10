import React, { useEffect, useRef, useState } from 'react';
import styles from './AboutMe.module.css';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

const AboutMe = () => {
  const sectionRef = useRef(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch profile từ Strapi
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(
          `${STRAPI_URL}/api/profiles?populate=*`,
          {
            headers: {
              'Content-Type': 'application/json',
              // Nếu API cần token: Authorization: `Bearer ${token}`
            },
          }
        );
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const json = await res.json();
        const data = json?.data?.[0];
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Fade-in observer
  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(`.${styles.fadeIn}`);
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]);

  // Helpers
  const avatarUrl = profile?.avatar?.url
    ? `${STRAPI_URL}${profile.avatar.url}`
    : null;

  // ── Loading skeleton ──
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

  // ── Error state ──
  if (error || !profile) {
    return (
      <section className={styles.aboutSection}>
        <div className="container text-center">
          <p className="text-muted">Failed to load profile data.</p>
        </div>
      </section>
    );
  }

  const {
    full_name,
    headline,
    bio,
    about_me,
    location,
    phone,
    github_url,
    linkedin_url,
    facebook_url,
    website_url,
  } = profile;

  return (
    <section className={styles.aboutSection} ref={sectionRef} id="about">
      <div className="container">

        {/* ── Hero header (tên + avatar) ── */}
        <div className={`row justify-content-center align-items-center mb-5 ${styles.fadeIn}`}>
          
          {/* Phần thông tin chữ */}
          <div className="col-12 col-md-6 text-center text-md-start">
            {full_name && (
              <h1 className={styles.heroName}>
                Hi, I'm {full_name} 
              </h1>
            )}
            {headline && <p className={styles.heroHeadline}>{headline}</p>}
            
            <div className={`${styles.contactRow} d-flex flex-wrap justify-content-center justify-content-md-start gap-3 mt-2`}>
              {location && <span className={styles.contactItem}>📍 {location}</span>}
              {phone && (
                <a href={`tel:${phone}`} className={styles.contactItem}>
                  📞 {phone}
                </a>
              )}
            </div>
            
            <div className={`${styles.socialRow} d-flex flex-wrap justify-content-center justify-content-md-start gap-2 mt-3`}>
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

          {/* Phần Avatar */}
          {avatarUrl && (
            <div className="col-12 col-md-3 text-center mt-4 mt-md-0">
              <img
                src={avatarUrl}
                alt={full_name || 'Avatar'}
                className={styles.avatar}
              />
            </div>
          )}
        </div>

        {/* ── CHỈNH SỬA: About Me Title (Căn toàn bộ tiêu đề ra giữa) ── */}
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-8">
            <div className={`${styles.fadeIn} mb-3`}>
              {/* Sửa lại lỗi cú pháp thuộc tính "text-center" cũ của bạn */}
              <span className={`${styles.sectionLabel} d-inline-block`}>About Me</span>
            </div>
            <h2 className={`${styles.fadeIn} ${styles.heading} mb-3`}>Who I Am</h2>
            
            {/* Bio: Thêm text-start để nội dung bio canh lề trái trong khối căn giữa */}
            {bio && (
              <p className={`${styles.fadeIn} ${styles.subtitle} text-start mb-4`}>{bio}</p>
            )}
            <hr className={`${styles.fadeIn} ${styles.divider} mb-4`} />
          </div>
        </div>

        {/* ── CHỈNH SỬA: About Me Content (Khối nằm giữa, chữ canh lề trái theo đoạn) ── */}
        {about_me && (
          <div className="row justify-content-center">
            {/* Thêm class text-start (hoặc text-justify nếu muốn thẳng đều 2 bên) */}
            <div className={`col-12 col-lg-8 text-start ${styles.fadeIn} ${styles.bodyText}`}>
              {about_me.split('\n').filter(Boolean).map((paragraph, i) => (
                <p key={i} className="mb-3">{paragraph}</p>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default AboutMe;