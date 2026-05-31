/**
 * Global Color Configuration
 * Sử dụng các màu này trong toàn bộ ứng dụng
 */

export const colors = {
  // Primary Colors (Màu chính)
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c3d66',
  },

  // Secondary Colors (Màu phụ)
  secondary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
  },

  // Neutral Colors (Màu trung lập)
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },

  // Semantic Colors (Màu có ý nghĩa)
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#145231',
  },

  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },

  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },

  info: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },

  // Special Colors (Màu đặc biệt)
  dark: '#1f2937',
  light: '#f9fafb',
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
};

/**
 * Alias colors - cho phép sử dụng với tên ngắn hơn
 */
export const colorAliases = {
  primary: colors.primary[600],
  secondary: colors.secondary[600],
  success: colors.success[600],
  error: colors.error[600],
  warning: colors.warning[600],
  info: colors.info[600],
  text: colors.neutral[900],
  textLight: colors.neutral[600],
  textLighter: colors.neutral[400],
  bg: colors.neutral[50],
  bgLight: colors.white,
  border: colors.neutral[200],
  borderDark: colors.neutral[300],
};

export default colors;
