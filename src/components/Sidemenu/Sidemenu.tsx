import React from 'react';
import Box from '~/styles/Box';
import { PSmallBold } from '~/styles/Text';
import { COLORS, SIZES } from '~/styles/theme';
import { SideMenuListItem, SideMenuListWrapper } from './SideMenuListItem';
import UserSection from './UserSection';

const Sidemenu = () => {
  return (
    <Box width={SIZES.SIDEMENU_WIDTH} backgroundColor={COLORS.PINKTHEME}>
      <Box display="flex" flexDirection="column" mt={5}>
        <SideMenuListWrapper>
          <SideMenuListItem />
        </SideMenuListWrapper>
      </Box>
      <UserSection />
    </Box>
  );
};

export default Sidemenu;
