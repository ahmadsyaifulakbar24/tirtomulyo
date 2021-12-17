import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import PackageComponent from './PackageComponent';
import axios from 'axios';
import { api_url } from '../../variable/BaseUrl';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(5, 0, 10, 0),
        flexGrow: 1,
    },
    titleContent: {
      fontWeight: 900,
      textAlign: 'center',
      marginBottom: theme.spacing(3)
  },
})) 

function Packages() {
    const classes = useStyles();
    const [tourPackage, setTourPackage] = useState([])

    const getPackage = async () => {
      await axios.get(api_url + 'tourpackage')
      .then((res) => {
        setTourPackage(res.data)
      })
    }

    useEffect(() => {
      getPackage()
    })

    return (
      <Container>    
          <div className={classes.root}>
            <Typography 
                className={classes.titleContent}
                variant="h4"
                color="primary"
            >
                Paket Harga
            </Typography>
            <Grid container spacing={3}>
              {
                tourPackage.map((item, index) => (
                  <Grid 
                    item 
                    xs={12} 
                    sm={4}
                    key={index}
                  >
                    <PackageComponent 
                      data={item}
                    />
                  </Grid>
                ))
              }
            </Grid>
          </div>
      </Container>
    )
}

export default Packages
