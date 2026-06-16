import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../pages/BlogPage.module.css'; 

export const PostCard = ({ post }) => {
  // 1. Kiểm tra cấu trúc Strapi (v4 bọc trong attributes, v5 hoặc REST tùy biến có thể phẳng)
  const id = post.id;
  const blog = post.attributes ? post.attributes : post; 

  // 2. Sử dụng destructuring từ object blog theo đúng ý bạn
  const { title, content, excerpt, thumbnail, publishedAt} = blog;

  // 3. Xử lý logic lấy URL hình ảnh từ Strapi
  const strapiBaseUrl = "http://localhost:1337"; 
 const fullImageUrl = (thumbnail?.data?.attributes?.url || thumbnail?.url)
  ? `${STRAPI_URL}${thumbnail?.data?.attributes?.url || thumbnail?.url}`
  : null;

  return (
    <div className={`card h-100 border-1 border-light-subtle rounded-4 overflow-hidden ${styles.customCard}`}>
      {/* Thumbnail */}
      <div className={`position-relative w-100 ${styles.thumbWrapper}`} style={{ aspectRatio: '16/9' }}>
        <img 
          src={fullImageUrl} 
          alt={title} 
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        />
      </div>
      
      {/* Body */}
      <div className="card-body p-4 d-flex flex-column">
        <Link to={`/blog/${id}`} className="text-decoration-none">
          <h3 className={`card-title h5 fw-bold text-dark mb-2 ${styles.titleHover}`}>
            {title}
          </h3>
        </Link>
        
        {/* Ngày xuất bản */}
        <div className="text-muted small mb-3">
          {publishedAt ? new Date(publishedAt).toLocaleDateString('vi-VN') : 'N/A'}
        </div>
        
        {/* Mô tả ngắn */}
        <p className="card-text text-secondary small flex-grow-1 mb-4" style={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {content || excerpt}
        </p>
        
        {/* Nút xem chi tiết */}
        <Link to={`/blog/${id}`} className={`btn btn-sm align-self-start rounded-pill px-4 ${styles.minimalBtn}`}>
          Đọc bài viết
        </Link>
      </div>
    </div>
  );
};