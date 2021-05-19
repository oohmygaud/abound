import React from 'react';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    header: {
        position: 'relative',
        height: '100vh'
        
    },
    introBox: {
        position: 'absolute',
        top: '10%',
        left: '0',
        background: '#b0db43',
        height: '24em',
        width: '100%',
        display: 'flex'
    },
    image: {
        height: '20em',
        borderRadius: '5px',
        padding: '2em'
    },
    name: {
        fontSize: '40px',
        fontFamily: 'IBMPlexMono',
    },
    [theme.breakpoints.up('md')]: {
        image: {
            height: '40em',
            padding: '4em',
        },
        name: {
            fontFamily: 'IBMPlexMono',
            fontSize: '70px',
            padding: '1em',
        },
        introBox: {
            height: '17em'
        }
    },
    intro: {

    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <div className={classes.introBox}>
                <img className={classes.image} alt="profile_img" src="profile_img.jpg" />
                <h1 className={classes.name}>Hello, I'm Audrey.<br /><br /> I'm a full-stack developer with expertise in building responsive web pages with React.</h1>
                
            </div>
        </header>
    )
}