// Libs
import React from 'react';

// Utils

// Components
import {
  Dropdown,
  NavBarLayout,
  NutanixLogoIcon
} from '@nutanix-ui/prism-reactjs';

function Header() {

  const menuItems = [
    
  ];

  return (
    <NavBarLayout
      layout={ NavBarLayout.NavBarLayoutTypes.LEFT }
      htmlTag="header"
      logoIcon={ <NutanixLogoIcon style={{ color: 'white' }} /> }
      title="Observability Cost Cutter"
      menuItems={ menuItems }
    />
  );
}

export default Header;
