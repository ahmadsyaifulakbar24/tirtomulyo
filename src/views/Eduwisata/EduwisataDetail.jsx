import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Banner2 from '../../components/banner2'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(5)
    },
    title: {
        fontWeight: 600,
        paddingBottom: theme.spacing(3)
    },
    image: {
        width: "100%",
    },
    description: {
        marginTop: 15,
    }
}))
function EduwisataDetail() {
    const classes = useStyles()
    return (
        <div>
            <Banner2 />
            <Container className={classes.root}>
                <Typography
                    className={classes.title}
                    variant="h3"
                    component="h2"
                >
                    Ini title Blog
                </Typography>
                <img 
                    className={classes.image}
                    src="/assets/images/banner.jpg"
                    alt="title"
                />
                <Typography
                    className={classes.description}
                    color="textSecondary"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum sit ad debitis ab eius accusantium fuga atque quos voluptatibus adipisci aliquam maiores, earum reiciendis explicabo qui cumque ullam dignissimos?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum sit ad debitis ab eius accusantium fuga atque quos voluptatibus adipisci aliquam maiores, earum reiciendis explicabo qui cumque ullam dignissimos?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum sit ad debitis ab eius accusantium fuga atque quos voluptatibus adipisci aliquam maiores, earum reiciendis explicabo qui cumque ullam dignissimos?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum sit ad debitis ab eius accusantium fuga atque quos voluptatibus adipisci aliquam maiores, earum reiciendis explicabo qui cumque ullam dignissimos?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum sit ad debitis ab eius accusantium fuga atque quos voluptatibus adipisci aliquam maiores, earum reiciendis explicabo qui cumque ullam dignissimos?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum sit ad debitis ab eius accusantium fuga atque quos voluptatibus adipisci aliquam maiores, earum reiciendis explicabo qui cumque ullam dignissimos?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum sit ad debitis ab eius accusantium fuga atque quos voluptatibus adipisci aliquam maiores, earum reiciendis explicabo qui cumque ullam dignissimos?
                </Typography>
            </Container>

        </div>
    )
}

export default EduwisataDetail
