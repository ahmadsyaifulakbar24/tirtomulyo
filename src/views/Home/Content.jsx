import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3)
    },
    image: {
        width: "100%",
        height: "auto",
        // [theme.breakpoints.down('sm')] : {
        //     marginTop: theme.spacing(5)
        // },
        borderRadius: 10
    },
    titleContent: {
        fontWeight: 900
    },
    subTitle: {
        marginTop: theme.spacing(2)
    },
    gridContent: {
        marginTop: theme.spacing(3)
    },
    gridContentMobile: {
        [theme.breakpoints.down('md')] : {
            marginTop: theme.spacing(3)
        }
    },
    gridParent: {
        [theme.breakpoints.down('md')] : {
            flexDirection: "column-reverse"
        }
    }
}))

function Content(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Box
                bgcolor="#e8e8ff"
                py={7}
            >       
                <Container> 
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Grid item lg={5} xs={12}>
                            <img 
                                className={classes.image}
                                src="/assets/images/content1.jpg"
                                alt="" 
                            />
                        </Grid>

                        <Grid container lg={6} xs={12} >
                            <Grid 
                                item 
                                className={classes.gridContentMobile}
                            >
                                <Typography 
                                    className={classes.titleContent}
                                    variant="h4"
                                    color="primary"
                                >
                                    Buat Website anda dengan cepat
                                </Typography>
                                <Typography
                                    className={classes.subTitle}
                                    variant="subtitle1"
                                >
                                    Sebutkan satu perusahaan hebat yang tidak punya website, sepertinya Anda akan kesulitan. Terutama di era setelah COVID, di mana semua hal dilakukan secara digital, Anda akan ketinggalan jika tidak dapat ditemukan secara online. Membuat website yang baik begitu penting karena 57% pengguna menyatakan mereka tidak mau merekomendasikan bisnis dengan website yang jelek. Tapi jangan khawatir, jika Anda ingin meluncurkan website yang didesain dengan baik ataupun membuat pengalaman digital baru untuk pelanggan Anda, tim kami Software siap membantu!
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid> 
                </Container>
            </Box>

            {/* Mobile Component */}
            <Box
                py={7}
            >
                <Container>
                    <Grid
                        className={classes.gridParent}
                        container
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Grid 
                            className={classes.gridContentMobile}
                            container lg={6} xs={12} 
                        >
                            <Grid item >
                                <Typography 
                                    className={classes.titleContent}
                                    variant="h4"
                                    color="primary"
                                >
                                    Buat Aplikasi Mobile Anda
                                </Typography>
                                <Typography
                                    className={classes.subTitle}
                                    variant="subtitle1"
                                >
                                    Kami menyediakan jasa pengembangan aplikasi mobile sesuai dengan kebutuhan bisnis Anda. Apa yang membedakan kami dari yang lain adalah desain kami yang cermat, kualitas aplikasi yang baik, dan fungsionalitas yang canggih dari aplikasi mobile Anda. Dengan pengalaman meluncurkan ratusan aplikasi iOS dan Android berkualitas, kami menghadirkan produk digital terbaik yang menyenangkan pengguna dan terintegrasi dengan tujuan bisnis Anda.
                                </Typography>
                            </Grid>
                        </Grid>
                        
                        <Grid item lg={5} xs={12}>
                            <img 
                                className={classes.image}
                                src="/assets/images/content2.jpg"
                                alt="" 
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Content