import React from 'react';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    header: {
        background: '#db2763',
        position: 'relative',
        height: '100vh'
        
    },
    introBox: {
        position: 'absolute',
        top: '15%',
        left: '0',
        background: '#b0db43',
        height: '20em',
        width: '100%',
        display: 'flex'
    },
    image: {
        height: '40em',
        borderRadius: '5px',
    },
    name: {
        fontFamily: 'IBMPlexMono',
        fontSize: '80px',
        padding: '1em'
    }
})

export default function Header() {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <div className={classes.introBox}>
                <img className={classes.image} alt="profile_img" src="profile_img.jpg" />
                <h1 className={classes.name}>Hello, I'm Audrey</h1>
            </div>
        </header>
    )
}