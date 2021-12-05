import { 
    Box, 
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    Divider, 
    makeStyles, 
    Typography 
} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    card: {
        minWidth: 275,
    },
    title: {
        fontSize: 17,
    },
    price: {
        fontWeight: 600
    },
    subPrice: {
        fontSize: 17,
    },
})) 

function PackageComponent(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card} variant="outlined">
            <CardContent>
                <Box sx={{ mb: 3 }}>
                    <Typography 
                            className={classes.title} 
                            color="textSecondary" 
                            gutterBottom
                            align="center"
                    >
                        Paket A
                    </Typography>
                    <Typography 
                        className={classes.price}
                        variant="h4" 
                        component="h2"
                        align="center"
                    >
                        Rp. 140.000 
                        <span className={classes.subPrice}>/orang</span>
                    </Typography>
                </Box>
                <Divider variant="middle" />
                <Box sx={{ mt: 3 }}>
                    asfalsdfl
                    asdfklj
                    kjslf
                </Box>
            </CardContent>
            <CardActions>
                <Button fullWidth variant="contained" color="primary" size="large">
                    Pesan
                </Button>
            </CardActions>
        </Card>
    )
}

export default PackageComponent
