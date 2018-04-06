import React from 'react';
import classes from './HelloWorld.css';

const HelloWorld = () => {    
    return(
        <div>
            <h1 className={classes.blue}>Hi, I'm a React App</h1>
            <span className={[classes.bold, classes.transformed].join(' ')}>And I'm really working</span>
        </div>
    );
}

export default HelloWorld;