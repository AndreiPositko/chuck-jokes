// libs
import React from 'react';
import { Typography, Tab, Tabs, AppBar } from '@mui/material';

const Header = ({ changeTab, currentTab, title }) => {
  return (
    <>
      <Typography
        variant='h3'
        align='center'
        sx={{ paddingTop: 6, color: 'white' }}
      >
        {title}
      </Typography>
      <AppBar
        color='default'
        style={{ marginBottom: '24px', backgroundColor: 'rgb(19, 47, 76)' }}
        maxWidth='md'
      >
        <Tabs
          value={currentTab}
          onChange={changeTab}
          centered
        >
          <Tab
            label='all jokes'
            id='all-tab'
            sx={{ color: 'white' }}
            aria-controls='all-panel'
          />
          <Tab
            label='favourite'
            id='favourite-tab'
            sx={{ color: 'white' }}
            aria-controls='favourite-panel'
          />
        </Tabs>
      </AppBar>
    </>
  );
};

export default Header;
