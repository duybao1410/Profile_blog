import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from '../../../componets/layout/Navbar';
import { PostCard } from '../components/PostCard';
import styles from './BlogPage.module.css'; 

export const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:1337/api/posts?populate=*')
      .then(response => {
        setPosts(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error loading Strapi posts:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white min-vh-100">
      <Navbar />
      
      <section className="container py-5" style={{ marginTop: '40px' }}>
        <div className="row mb-5">
          <div className="col-12 text-center">
            <span className={`badge rounded-pill px-3 py-2 mb-3 ${styles.sectionLabel}`}>
              Insights
            </span>
            <h1 className="display-4 fw-extrabold text-dark tracking-tight">My Blog</h1>
          </div>
        </div>

        <div className="row g-4">
          {loading ? (
            // Shimmer effect chuẩn gọn, tận dụng tiện ích bootstrap
            Array(3).fill(0).map((_, idx) => (
              <div key={idx} className="col-12 col-md-4">
                <div className="card h-100 p-4 border-1 border-light-subtle rounded-4 gap-3">
                  <div className={`${styles.skeleton} w-100`} style={{ height: '180px', borderRadius: '12px' }}></div>
                  <div className={`${styles.skeleton} w-75`} style={{ height: '24px' }}></div>
                  <div className={`${styles.skeleton} w-100`} style={{ height: '16px' }}></div>
                  <div className={`${styles.skeleton} w-50`} style={{ height: '16px' }}></div>
                </div>
              </div>
            ))
          ) : posts.length > 0 ? (
            posts.map(post => (
              <div key={post.id} className="col-12 col-md-4">
                <PostCard post={post} />
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5 text-muted">
              <p>Chưa có bài viết nào được xuất bản.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;