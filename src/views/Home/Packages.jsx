import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import PackageComponent from './PackageComponent';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(10, 0, 10, 0),
        flexGrow: 1,
    },
})) 

function Packages() {
    const classes = useStyles();
    return (
      <Container>    
          <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <PackageComponent />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <PackageComponent />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <PackageComponent />
                </Grid>
            </Grid>
          </div>
      </Container>
    )
}

export default Packages
