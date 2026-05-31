/**
 * Theme Configuration
 * Hỗ trợ multiple themes (light, dark, etc.)
 */

export const lightTheme = {
  name: 'light',
  colors: {
    primary: '#0284c7',
    secondary: '#7c3aed',
    success: '#16a34a',
    error: '#dc2626',
    warning: '#d97706',
    info: '#2563eb',
    text: '#111827',
    textSecondary: '#6b7280',
    textTertiary: '#9ca3af',
    bg: '#f9fafb',
    bgSecondary: '#ffffff',
    bgTertiary: '#f3f4f6',
    border: '#e5e7eb',
    borderDark: '#d1d5db',
  },
};

export const darkTheme = {
  name: 'dark',
  colors: {
    primary: '#38bdf8',
    secondary: '#a78bfa',
    success: '#4ade80',
    error: '#f87171',
    warning: '#fbbf24',
    info: '#60a5fa',
    text: '#f9fafb',
    textSecondary: '#d1d5db',
    textTertiary: '#9ca3af',
    bg: '#111827',
    bgSecondary: '#1f2937',
    bgTertiary: '#374151',
    border: '#374151',
    borderDark: '#4b5563',
  },
};

/**
 * Chọn theme dựa trên system preferences hoặc user setting
 */
export const getTheme = (themeName = 'light') => {
  switch (themeName) {
    case 'dark':
      return darkTheme;
    case 'light':
    default:
      return lightTheme;
  }
};

/**
 * Hook để thay đổi theme (nếu sử dụng React Context)
 */
export const useTheme = () => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  return {
    theme: getTheme(theme),
    themeName: theme,
    toggleTheme,
  };
};

export default lightTheme;
