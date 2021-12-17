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
import { contact_url } from '../../variable/BaseUrl';

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
                        {props.data.title}
                    </Typography>
                    <Typography 
                        className={classes.price}
                        variant="h4" 
                        component="h2"
                        align="center"
                    >
                        {props.data.price}
                        <span className={classes.subPrice}>/orang</span>
                    </Typography>
                </Box>
                <Divider variant="middle" />
                <Box sx={{ mt: 3 }}>
                    <div dangerouslySetInnerHTML={{__html: props.data.content}} />;
                </Box>
            </CardContent>
            <CardActions>
                <Button fullWidth variant="contained" color="primary" size="large" href={contact_url}>
                    Pesan
                </Button>
            </CardActions>
        </Card>
    )
}

export default PackageComponent
