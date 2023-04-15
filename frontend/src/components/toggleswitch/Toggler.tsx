import React, { useState } from 'react';

type SwitcherProps = {
  isOn: boolean;
  handleToggle: React.MouseEventHandler<HTMLDivElement> | undefined
};

const Switcher: React.FC<SwitcherProps> = ({ isOn, handleToggle }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      style={{
        display: 'inline-block',
        position: 'relative',
        width: 40,
        height: 20,
        borderRadius: 20,
        backgroundColor: isOn ? '#00C853' : '#9E9E9E',
        transition: 'background-color 0.2s ease-in-out',
        cursor: 'pointer',
      }}
      onClick={handleToggle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          position: 'absolute',
          bottom: 2,
          left: isOn ? 23 : 3,
          width: 16,
          height: 16,
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          boxShadow: isHovered ? '0px 1px 2px rgba(0, 0, 0, 0.2)' : 'none',
          transition: 'left 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        }}
      />
    </div>
  );
};

export default Switcher;