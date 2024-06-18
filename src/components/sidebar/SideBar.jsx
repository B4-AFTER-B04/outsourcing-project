import React, { useRef, useState } from 'react';

const SideBar = ({ width = 280, children }) => {
  const [open, setOpen] = useState(false);
  const [positionX, setPositionX] = useState(width);
  const side = useRef();

  const toggleMenu = () => {
    if (positionX < 0) {
      setPositionX(0);
      setOpen(true);
    } else {
      setPositionX(width);
      setOpen(false);
    }
  };

  return (
  <>
  <div>
    <button>
    </button>
  </div>
  </>
  )
};

export default SideBar;
