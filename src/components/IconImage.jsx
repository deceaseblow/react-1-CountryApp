import React from 'react';
import iconSrc from '../assets/icon.png'; // now safe, no conflict

function IconImage() {
  return (
    <div className="w-6 h-6">
      <img src={iconSrc} alt="Icon" className="w-full h-full object-contain" />
    </div>
  );
}

export default IconImage;
