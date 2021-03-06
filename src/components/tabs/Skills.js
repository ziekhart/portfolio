import React from 'react';
import injectSheet from 'react-jss';
import Flip from 'react-reveal/Flip';

const Skills = ({ classes }) => (
  <div className={classes.container}>
    <Flip left cascade>
      <h1>Skills & Technologies</h1>
      <h2>Front-end</h2>
      <div className={classes.content}>
        <img src="images/reactLogo.png" alt="" />
        <img src="images/reactNativeLogo.png" alt="" />
        <img src="images/hLogo.png" alt="" />
        <img src="images/cssLogo.svg" alt="" />
        <img src="images/bLogo.png" alt="" />
      </div>

      <h2>Back-end</h2>
      <div className={classes.content}>
        <img src="images/jsLogo.png" alt="" />
        <img src="images/typeScriptLogo.svg" alt="" />
        <img src="images/nodeLogo.png" alt="" />
        <img src="images/csLogo.png" alt="" />
        <img src="images/javLogo.png" alt="" />
        <img src="images/elixirLogo.png" alt="" />
      </div>

      <h2>Etc</h2>
      <div className={classes.content}>
        <img src="images/gitLogo.png" alt="" />
        <img src="images/mLogo.png" alt="" />
        <img src="images/gqlLogo.png" alt="" />
        <img src="images/redisLogo.svg" alt="" />
        <img src="images/postgresLogo.png" alt="" />
      </div>
    </Flip>
  </div>
);

const styles = {
  '@global body': {
    backgroundColor: '#C89B7B',
    paddingBottom: 20,
  },
  container: {
    height: '100%',
    color: 'white',
    paddingTop: 50,
    paddingLeft: 200,
    paddingRight: 200,
    '@media (max-width: 800px)': {
      paddingLeft: 40,
      paddingRight: 40,
    },
    '& img': {
      width: '80px',
      height: '100%',
      marginBottom: 20,
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingLeft: 20,
    '@media (max-width: 800px)': {
      flexFlow: 'column wrap',
      alignItems: 'center',
      paddingLeft: 0,
    },
  },
  text: {
    alignItems: 'center',
    textAlign: 'center',
    color: 'black',
  },
};

export default injectSheet(styles)(Skills);
