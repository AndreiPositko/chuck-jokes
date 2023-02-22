// libs
import React from 'react';
import { Typography, Tab, Tabs, AppBar } from '@mui/material';

// styles
import styles from './styles.module.scss';

const Header = ({ changeTab, currentTab, title }) => {
  console.log('Header');
  return (
    <>
      <Typography
        variant='h3'
        align='center'
        className={styles.title}
      >
        {title}
      </Typography>
      <AppBar
        color='default'
        className={styles.appBar}
        style={{ backgroundColor: 'rgb(19, 47, 76)' }}
      >
        <Tabs
          value={currentTab}
          onChange={changeTab}
          centered
        >
          <Tab
            label='all jokes'
            id='all-tab'
            className={styles.tab}
            sx={{ color: 'white' }}
            aria-controls='all-panel'
          />
          <Tab
            label='favourite'
            id='favourite-tab'
            className={styles.tab}
            sx={{ color: 'white' }}
            aria-controls='favourite-panel'
          />
        </Tabs>
      </AppBar>
    </>
  );
};

export default Header;
