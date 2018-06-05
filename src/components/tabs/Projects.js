import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  container: {
    height: 740,
    color: 'white',
    backgroundColor: '#CC5A71',
    paddingLeft: 107,
    paddingRight: 107,
    paddingTop: 68
  }
}

const Projects = ({ classes }) => (
  <div className={classes.container}>
    <h1>Project</h1>
    <p>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
)


export default injectSheet(styles)(Projects)