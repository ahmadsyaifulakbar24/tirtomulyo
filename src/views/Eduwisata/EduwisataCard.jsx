import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { image_url } from '../../variable/BaseUrl';

const useStyles = makeStyles({
    root: {
        maxWidth: 375,
        margin: 'auto'
    },
})

function EduwisataCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="215"
                    image={`${image_url}banner.jpg`}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button 
                    size="small" 
                    color="primary" 
                    href="/eduwisata/detail-eduwisata"
                >
                    Baca Selengkapnya
                </Button>
            </CardActions>
            </Card>
    )
}

export default EduwisataCard
