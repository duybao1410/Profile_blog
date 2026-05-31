import React from 'react';
import { colors } from '../../config/colors';

/**
 * Button Component - Ví dụ sử dụng global colors
 * 
 * Sử dụng:
 * <Button variant="primary">Save</Button>
 * <Button variant="secondary" size="lg">Cancel</Button>
 * <Button variant="error" disabled>Delete</Button>
 */

export const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  ...props
}) => {
  const variantColorMap = {
    primary: colors.primary[600],
    secondary: colors.secondary[600],
    success: colors.success[600],
    error: colors.error[600],
    warning: colors.warning[600],
    neutral: colors.neutral[600],
  };

  const sizeMap = {
    sm: {
      padding: '6px 12px',
      fontSize: '12px',
    },
    md: {
      padding: '10px 16px',
      fontSize: '14px',
    },
    lg: {
      padding: '12px 24px',
      fontSize: '16px',
    },
  };

  const buttonStyle = {
    ...sizeMap[size],
    backgroundColor: disabled ? colors.neutral[300] : variantColorMap[variant],
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    opacity: disabled ? 0.6 : 1,
  };

  const handleHover = (e) => {
    if (!disabled) {
      e.target.style.opacity = '0.9';
      e.target.style.transform = 'translateY(-2px)';
      e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    }
  };

  const handleHoverEnd = (e) => {
    e.target.style.opacity = '1';
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <button
      style={buttonStyle}
      disabled={disabled}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
