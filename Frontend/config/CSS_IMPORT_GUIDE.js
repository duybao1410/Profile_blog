/**
 * CÁCH LẤY STYLE TỪ CSS VÀO REACT COMPONENT
 * 
 * Có 5 cách chính để import và sử dụng CSS trong React
 */

// ============================================
// CÁCH 1: Import CSS File thông thường (Đơn giản)
// ============================================

/*
File: Navbar.css
─────────────────
.navbar {
  background-color: #0284c7;
  padding: 10px 20px;
  display: flex;
}

.navbar-logo {
  color: white;
  font-weight: bold;
}

.navbar-menu {
  display: flex;
  gap: 20px;
}
*/

// File: Navbar.js
import './Navbar.css';

export const Navbar1 = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

console.log(`
✅ CÁCH 1: Import CSS file thường
──────────────────────────────────
Ưu điểm:
  - Đơn giản, dễ hiểu
  - Tách biệt HTML và CSS
  - CSS được cached tốt

Nhược điểm:
  - Có thể conflict class names
  - Style global (scope toàn app)
  - Khó maintain khi project lớn

Khi nào dùng:
  - Project nhỏ
  - Muốn CSS global
  - Đơn giản và nhanh
`);

// ============================================
// CÁCH 2: CSS Modules (Recommended ⭐)
// ============================================

/*
File: Navbar.module.css  ← Chú ý .module
─────────────────────────
.navbar {
  background-color: #0284c7;
  padding: 10px 20px;
  display: flex;
}

.logo {
  color: white;
  font-weight: bold;
}

.menu {
  display: flex;
  gap: 20px;
}
*/

// File: Navbar.js
import styles from './Navbar.module.css';

export const Navbar2 = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
      <ul className={styles.menu}>
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

console.log(`
✅ CÁCH 2: CSS Modules (BEST PRACTICE)
──────────────────────────────────────
Ưu điểm:
  - Tránh conflict class names
  - Scope CSS cục bộ
  - Dễ maintain
  - IDE có intellisense tốt

Nhược điểm:
  - Phải đặt tên .module.css
  - Cú pháp styles.className hơi verbose
  - Phức tạp hơn import file thường

Khi nào dùng:
  - Project trung/lớn ✅ RECOMMENDED
  - Cần scope CSS cục bộ
  - Nhiều components cùng tên class
`);

// ============================================
// CÁCH 3: Inline Styles (JavaScript Object)
// ============================================

export const Navbar3 = () => {
  const styles = {
    navbar: {
      backgroundColor: '#0284c7',
      padding: '10px 20px',
      display: 'flex',
    },
    logo: {
      color: 'white',
      fontWeight: 'bold',
    },
    menu: {
      display: 'flex',
      gap: '20px',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Logo</div>
      <ul style={styles.menu}>
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

console.log(`
✅ CÁCH 3: Inline Styles (JavaScript Object)
──────────────────────────────────────────────
Ưu điểm:
  - Dynamic styles dễ
  - Không cần file CSS riêng
  - Props support tốt

Nhược điểm:
  - Performance kém (tạo object mỗi render)
  - Khó maintain code dài
  - Không có hover, media query dễ
  - Tên thuộc tính CSS khác (camelCase)

Khi nào dùng:
  - Dynamic styles (props/state)
  - Component đơn giản
  - Tạm thời / prototype nhanh
`);

// ============================================
// CÁCH 4: CSS Variables (Recommended ⭐)
// ============================================

/*
File: colors.css
─────────────────
:root {
  --color-primary: #0284c7;
  --color-white: white;
  --spacing: 20px;
}

File: Navbar.css
─────────────────
.navbar {
  background-color: var(--color-primary);
  padding: 10px var(--spacing);
  display: flex;
}

.logo {
  color: var(--color-white);
  font-weight: bold;
}

.menu {
  display: flex;
  gap: var(--spacing);
}
*/

export const Navbar4 = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

console.log(`
✅ CÁCH 4: CSS Variables (BEST FOR THEMING)
─────────────────────────────────────────────
Ưu điểm:
  - Dễ thay đổi theme (dark/light)
  - Reusable values
  - Performance tốt
  - Dễ maintain color system

Nhược điểm:
  - Phải define CSS file riêng
  - Browser support (IE11 không hỗ trợ)
  - Phức tạp cho complex styling

Khi nào dùng:
  - Theming (dark/light mode) ✅
  - Global color/size system
  - Muốn consistency
`);

// ============================================
// CÁCH 5: Classnames + CSS Modules (Combo)
// ============================================

import classNames from 'classnames';
import styles from './Navbar.module.css';

export const Navbar5 = ({ isActive = false }) => {
  return (
    <nav className={classNames(styles.navbar, {
      [styles.active]: isActive
    })}>
      <div className={styles.logo}>Logo</div>
      <ul className={styles.menu}>
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

console.log(`
✅ CÁCH 5: classNames + CSS Modules
───────────────────────────────────
Ưu điểm:
  - Conditional classes dễ
  - Scope CSS tốt
  - Flexible lắm

Nhược điểm:
  - Phải install package
  - Cú pháp hơi phức tạp

Khi nào dùng:
  - Conditional styling
  - CSS Modules + dynamic classes
`);

// ============================================
// SO SÁNH TẤT CẢ CÁCH
// ============================================

console.log(`
╔════════════════════════════════════════════════════════════════════╗
║                   BẢNG SO SÁNH TẤT CẢ CÁCH                        ║
╠═══════════╦═══════════╦════════════╦═══════════╦═════════╦═════════╣
║  Tiêu chí ║ CSS File  ║ CSS Module ║  Inline   ║ CSS Var ║ classN. ║
╠═══════════╬═══════════╬════════════╬═══════════╬═════════╬═════════╣
║ Dễ dùng   ║ ⭐⭐⭐    ║ ⭐⭐⭐     ║ ⭐⭐     ║ ⭐⭐   ║ ⭐⭐  ║
║ Dynamic   ║ ❌        ║ ❌         ║ ✅✅✅    ║ ✅     ║ ✅     ║
║ Scope     ║ ❌        ║ ✅✅✅      ║ ❌        ║ ❌     ║ ✅✅   ║
║ Maintain  ║ ⭐⭐     ║ ⭐⭐⭐      ║ ⭐       ║ ⭐⭐⭐ ║ ⭐⭐⭐ ║
║ Performa  ║ ⭐⭐⭐   ║ ⭐⭐⭐      ║ ⭐⭐     ║ ⭐⭐⭐ ║ ⭐⭐⭐ ║
║ Theming   ║ ⭐⭐     ║ ⭐⭐       ║ ⭐       ║ ⭐⭐⭐ ║ ⭐⭐  ║
╚═══════════╩═══════════╩════════════╩═══════════╩═════════╩═════════╝

🏆 TOP CHOICES:
  1. CSS Modules (⭐⭐⭐⭐) - Tất cả project size
  2. CSS Variables (⭐⭐⭐⭐) - Cho theming
  3. Kết hợp cả hai (⭐⭐⭐⭐⭐) - BEST!
`);

// ============================================
// BEST PRACTICE: Kết hợp CSS Module + CSS Variables
// ============================================

export const NavbarBEST = ({ isDark = false }) => {
  // Dùng CSS Module cho structure
  // Dùng CSS Variables cho colors
  
  return (
    <nav 
      className={styles.navbar}
      style={{ '--theme': isDark ? 'dark' : 'light' }}
    >
      <div className={styles.logo}>Logo</div>
      <ul className={styles.menu}>
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

console.log(`
🏆 BEST PRACTICE: KẾT HỢP CSS MODULE + CSS VARIABLES
─────────────────────────────────────────────────────

Cách làm:
  1. CSS Module cho layout/structure
  2. CSS Variables cho colors/themes
  3. Inline styles cho dynamic values

Ví dụ:
  // Navbar.module.css
  .navbar {
    background-color: var(--color-primary);
    padding: 10px 20px;
    display: flex;
  }

  .logo {
    color: var(--color-white);
    font-weight: bold;
  }

  // Navbar.js
  import styles from './Navbar.module.css';
  
  <nav className={styles.navbar}>
    <div className={styles.logo}>Logo</div>
  </nav>

Lợi ích:
  ✅ Tránh conflict class names
  ✅ Dễ thay đổi theme
  ✅ Code sạch và organized
  ✅ Performance tốt
  ✅ Dễ maintain
`);
