import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/variable.css';
import 'bootstrap/dist/css/bootstrap.min.css';  


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
index.html: Là khung HTML ban đầu mà trình duyệt tải đầu tiên. File này thường chứa phần tử gốc như <div id="root"></div> để React gắn và hiển thị toàn bộ giao diện ứng dụng.
main.jsx: Là điểm khởi động của ứng dụng React. File này có nhiệm vụ import React, ReactDOM, component gốc (App.jsx) và render ứng dụng vào phần tử root trong index.html.
App.jsx: Là component gốc chứa giao diện chính của ứng dụng. Từ đây, các component con được tổ chức và kết hợp để tạo thành giao diện hoàn chỉnh cho người dùng.
 */