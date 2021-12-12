import React from 'react'
import Card from '@material-ui/core/Card';
import { Avatar, Box, CardContent, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { image_url } from '../../variable/BaseUrl';

const useStyle = makeStyles((theme) => ({
    titleContent: {
        fontWeight: 900,
        marginBottom: theme.spacing(3)
    },
    cardTitle: {
        fontWeight: 600,
        marginBottom: theme.spacing(3)
    },
    boxAvatar: {
        margin: theme.spacing(5, 0, 3, 0)
    },
    avatar: {
        height: theme.spacing(9),
        width: theme.spacing(9),
        marginRight: theme.spacing(3)
    },
    avatarTitle: {
        fontWeight: 600
    }
}))

const CardComment = (props) => {
    const classes = useStyle()

    return (
        <Card>
            <CardContent>
                <Typography
                    variant="h4"
                    className={classes.cardTitle}
                >
                    The Quite Atmosphere of Ubud
                </Typography>
                <Typography color="textSecondary" >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae saepe exercitationem id, odit sapiente, dolore quo perferendis aut accusantium recusandae repudiandae quibusdam illo eligendi ipsam ad ut fuga odio minus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae saepe exercitationem id
                </Typography>
                <Box
                    className={classes.boxAvatar}
                    sx={{ 
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Avatar 
                        className={classes.avatar}
                        alt="name user"
                        src={`${image_url}profile.jpg`}
                    />
                    <Box>
                        <Typography className={classes.avatarTitle} >
                            Ahmad Syaiful Akabr
                        </Typography>
                        <Typography className={classes.avatarSubTitle}>
                            Programmer
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

function Comment() {
    const classes = useStyle()
    return (
        <Box 
            py={3}
        >
            <Container>
                <Typography 
                    className={classes.titleContent}
                    variant="h4"
                    color="primary"
                >
                    Komentar Pengunjung
                </Typography>
                <Grid container spacing={5}>
                    <Grid item lg={6}>
                        <CardComment />
                    </Grid>
                    <Grid item lg={6}>
                        <CardComment />
                    </Grid>
                    <Grid item lg={6}>
                        <CardComment />
                    </Grid>
                    <Grid item lg={6}>
                        <CardComment />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Comment
