import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
  color: 'green' | 'yellow',
  width?: 'wide',
  size?: 'small'
}

const Button: React.FC<ButtonProps> = ({ children,onClick,
                                         color = 'yellow',width = 'normalWidth',size = 'normalSize'}) => {
  return (
    <button type="button"
            className={cn(s.root,s[color],s[size],s[width])}
            onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;