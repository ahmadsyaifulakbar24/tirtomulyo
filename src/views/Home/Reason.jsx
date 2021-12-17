import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    // root: {
    //     marginTop: theme.spacing(10),
    // },
    titleContent: {
      fontWeight: 900,
      textAlign: 'center',
      marginBottom: theme.spacing(5)
  },
  titleList: {
    fontWeight: 600,
  }
})) 

function Reason() {
    const classes = useStyles();
    return (
        <Box
            bgcolor={green[50]}
            py={7}
        >
            <Container className={classes.root} >
                <Typography 
                    className={classes.titleContent}
                    variant="h4"
                    color="primary"
                >
                    Mengapa Harus Ke Desa Tirtomulyo?
                </Typography>
                <Grid container spacing={7} >
                    <Grid 
                        item 
                        lg={4}
                        sm={6}
                        xs={12}
                    >
                            <Typography 
                                className={classes.titleList}
                                align="center" 
                                variant="h5"
                            >
                                Fasilitas No.1
                            </Typography>
                            <Typography align="center" >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis pariatur totam delectus, ea excepturi soluta non consequuntur esse dignissimos venia.
                            </Typography>
                    </Grid>
                    <Grid 
                        item 
                        lg={4}
                        sm={6}
                        xs={12}
                    >
                            <Typography 
                                className={classes.titleList}
                                align="center" 
                                variant="h5"
                            >
                                Operator Resmi
                            </Typography>
                            <Typography align="center" >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis pariatur totam delectus, ea excepturi soluta non consequuntur esse dignissimos venia.
                            </Typography>
                    </Grid>
                    <Grid 
                        item 
                        lg={4}
                        sm={6}
                        xs={12}
                    >
                            <Typography 
                                className={classes.titleList}
                                align="center" 
                                variant="h5"
                            >
                                Layanan Prima
                            </Typography>
                            <Typography align="center" >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis pariatur totam delectus, ea excepturi soluta non consequuntur esse dignissimos venia.
                            </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Reason
