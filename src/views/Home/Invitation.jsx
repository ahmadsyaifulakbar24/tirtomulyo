import { Box, Button, Container, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { contact_url } from '../../variable/BaseUrl'

const useStyle = makeStyles((theme) => ({
    root: {
        textAlign: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 900
    }, 
    subTitle: {
        fontSize: 25,
        fontWeight: 600
    },
    button: {
        marginTop: 20
    }
}))
function Invitation() {
    const classes = useStyle()

    return (
        <Box
            bgcolor={green[50]}
            py={3}
        >
            <Container>
                <Box className={classes.root}>
                    <Typography
                        className={classes.title}
                    >
                        Sudah Siap Untuk Berpetualang ?
                    </Typography>
                    <Typography
                        className={classes.subTitle}
                    >
                        Segera Hubungi Kami !
                    </Typography>
                    <Button 
                        className={classes.button}
                        variant="contained" 
                        color="primary"
                        size="large"
                        href={contact_url}
                    >
                        Klik Disini
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

export default Invitation
