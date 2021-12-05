import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import React, { Fragment } from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(7)
    },
    image: {
        width: "100%",
        height: "auto",
        [theme.breakpoints.down('md')] : {
            marginBottom: theme.spacing(3)
        }
    },
    video: {
        [theme.breakpoints.down('md')] : {
            marginBottom: theme.spacing(3)
        }
    },
    titleContent: {
        fontWeight: 900
    },
    subTitle: {
        marginTop: theme.spacing(2)
    },
    gridContent: {
        [theme.breakpoints.down('md')] : {
            flexDirection: "column-reverse",
            alignItems: "inherit"
        }
    },
}))

function Content() {
    const classes = useStyles()
    return (
        <Fragment>
            <Box>
                <Container className={classes.root}>
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Grid
                            item
                            lg={4}
                            xs={12}
                        >
                            <iframe 
                                className={classes.video}
                                width="100%"
                                height="257"
                                src="https://www.youtube.com/embed/N-E4-PRzJyg" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        </Grid>

                        <Grid
                            container
                            lg={7}
                            xs={12}
                        >
                            <Grid item>
                                <Typography 
                                    className={classes.titleContent}
                                    variant="h4"
                                    color="primary"
                                >
                                Membantu Perkembangan Bisnis Klien Melalui Solusi Digital Yang Inovatif
                                </Typography>

                                <Typography
                                    className={classes.subTitle}
                                    variant="subtitle1"
                                >
                                    Sesuai dengan visi kami, kami selalu berusaha untuk mengembangkan aplikasi web dan mobile inovatif yang disukai pengguna dan dapat memajukan bisnis klien. Dengan lebih dari 10 tahun pengalaman dalam bidang pengembangan aplikasi, kami menyediakan servis komprehensif untuk produk digital Anda:
                                </Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box 
                bgcolor={green[50]} 
                py={7} 
                className={classes.root}
            >
                <Container>
                    <Grid
                        className={classes.gridContent}
                        container
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Grid
                            container
                            lg={7}
                            xs={12}
                        >
                            <Grid item>
                                <Typography 
                                    className={classes.titleContent}
                                    variant="h4"
                                    color="primary"
                                >
                                Kami Adalah Bagian Dari Tim Anda
                                </Typography>

                                <Typography
                                    className={classes.subTitle}
                                    variant="subtitle1"
                                >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, fugit? Consectetur excepturi voluptatibus inventore quasi quos distinctio eius odit facilis quo dolorem saepe,
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, fugit? Consectetur excepturi voluptatibus inventore quasi quos distinctio eius odit facilis quo dolorem saepe,
                                </Typography>
                            </Grid>

                        </Grid>

                        <Grid
                            item
                            lg={4}
                            xs={12}
                        >
                            <iframe 
                                className={classes.video}
                                width="100%"
                                height="257"
                                src="https://www.youtube.com/embed/uB9RdXJVH1Y" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fragment>
    )
}

export default Content
