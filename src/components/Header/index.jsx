import React from 'react';
import { useClicker } from '../../hooks';

const Header = () => {
  const click = useClicker(0);
  return (
    <div>
      <h2>Header</h2>
      <p>click: {click}</p>
    </div>
  );
}

export default Header;
