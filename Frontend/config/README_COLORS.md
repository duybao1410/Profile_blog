# 🎨 Global Colors Configuration

## Vị trí file để định nghĩa màu sắc global

Bạn có thể tìm các file cấu hình màu sắc ở đây:

```
Frontend/
├── config/
│   ├── colors.js          ← Định nghĩa màu JS objects
│   ├── theme.js           ← Theme (Light/Dark mode)
│   └── COLORS_USAGE_GUIDE.js ← Hướng dẫn chi tiết
├── styles/
│   └── colors.css         ← CSS Variables toàn cục
└── App.js
```

---

## 3 Cách sử dụng màu sắc global

### 1️⃣ **Cách 1: Import từ config/colors.js (Inline Styles)**

Tốt nhất cho: Inline styles trong components

```javascript
import { colors } from '../config/colors';

const MyComponent = () => {
  return (
    <div style={{ backgroundColor: colors.primary[600] }}>
      Hello World
    </div>
  );
};
```

**Các màu sắc khả dụng:**
- `colors.primary[50-900]`
- `colors.secondary[50-900]`
- `colors.success[50-900]`
- `colors.error[50-900]`
- `colors.warning[50-900]`
- `colors.info[50-900]`
- `colors.neutral[50-900]`

**Sử dụng Alias (ngắn gọn):**
```javascript
import { colorAliases } from '../config/colors';

const MyComponent = () => {
  return (
    <button style={{ backgroundColor: colorAliases.primary }}>
      Click me
    </button>
  );
};
```

---

### 2️⃣ **Cách 2: CSS Variables (File CSS/SCSS)**

Tốt nhất cho: CSS Files hoặc CSS Modules

**Bước 1:** Import styles/colors.css vào App.js
```javascript
import './styles/colors.css';
```

**Bước 2:** Sử dụng CSS Variables trong CSS file
```css
.button {
  background-color: var(--color-primary);
  color: white;
  padding: 10px 16px;
  border-radius: 6px;
}

.button:hover {
  background-color: var(--color-primary-700);
}

.card {
  background-color: var(--color-bg-light);
  border: 1px solid var(--color-border);
  color: var(--color-text);
}

.alert-error {
  color: var(--color-error);
}

.alert-success {
  color: var(--color-success);
}
```

**Tất cả CSS Variables:**
```css
--color-primary-50 đến --color-primary-900
--color-secondary-50 đến --color-secondary-900
--color-neutral-50 đến --color-neutral-900
--color-success-500, --color-success-600
--color-error-500, --color-error-600
--color-warning-500, --color-warning-600
--color-info-500, --color-info-600
--color-text
--color-text-light
--color-text-lighter
--color-bg
--color-bg-light
--color-border
--color-border-dark
```

---

### 3️⃣ **Cách 3: Theme Hook (Dark Mode Support)**

Tốt nhất cho: Hỗ trợ multiple themes (Light/Dark)

```javascript
import { useTheme } from '../config/theme';

const MyComponent = () => {
  const { theme, toggleTheme, themeName } = useTheme();

  return (
    <div style={{ 
      backgroundColor: theme.colors.bgSecondary,
      color: theme.colors.text 
    }}>
      <h2>Current Theme: {themeName}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
```

---

## ✅ Ví dụ thực tế: Button Component

Xem [Button.js](../componets/ui/Button.js) để xem ví dụ đầy đủ.

```javascript
import { colors } from '../../config/colors';

export const Button = ({ variant = 'primary', children, ...props }) => {
  const variantColors = {
    primary: colors.primary[600],
    secondary: colors.secondary[600],
    success: colors.success[600],
    error: colors.error[600],
  };

  return (
    <button style={{ backgroundColor: variantColors[variant] }} {...props}>
      {children}
    </button>
  );
};

// Sử dụng:
// <Button variant="primary">Save</Button>
// <Button variant="error">Delete</Button>
// <Button variant="success">Confirm</Button>
```

---

## 🎯 Cách tốt nhất để chọn (Best Practices)

| Trường hợp | Cách sử dụng | File |
|-----------|-------------|------|
| Inline styles đơn giản | Import colors | `config/colors.js` |
| CSS file riêng | CSS Variables | `styles/colors.css` |
| Dark Mode/Multiple themes | useTheme hook | `config/theme.js` |
| CSS Modules | CSS Variables | `Button.module.css` |

---

## 📝 Thêm màu sắc custom

**Để thêm màu mới:**

1. Mở [config/colors.js](./colors.js)
2. Thêm vào object `colors`:
```javascript
export const colors = {
  // ... existing colors
  custom: {
    50: '#f0f0f0',
    100: '#e0e0e0',
    // ...
    900: '#1a1a1a',
  },
};
```

3. Cập nhật CSS Variables trong [styles/colors.css](../styles/colors.css):
```css
--color-custom-50: #f0f0f0;
--color-custom-100: #e0e0e0;
/* ... */
```

4. Sử dụng ngay:
```javascript
backgroundColor: colors.custom[600]
// hoặc
background-color: var(--color-custom-600);
```

---

## 🚀 Nên làm ngay

1. ✅ Import `styles/colors.css` trong [App.js](../App.js)
2. ✅ Cập nhật components cũ để sử dụng global colors
3. ✅ Sử dụng color variables thay vì hardcode hex colors

---

## 📚 File tham khảo

- [config/COLORS_USAGE_GUIDE.js](./COLORS_USAGE_GUIDE.js) - Hướng dẫn chi tiết
- [config/colors.js](./colors.js) - Định nghĩa màu sắc
- [config/theme.js](./theme.js) - Theme configuration
- [styles/colors.css](../styles/colors.css) - CSS Variables
- [componets/ui/Button.js](../componets/ui/Button.js) - Ví dụ Button component
