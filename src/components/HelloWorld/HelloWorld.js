import React from 'react';
import classes from './HelloWorld.css';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const HelloWorld = () => {    
    // if(Math.random() > 0.7) {
    //     throw new Error('Smth going wrong');
    // }
    this.hello = () => {
        alert('Hello')
    }

    return(
        <ErrorBoundary>
            <div>
                <h1 className={classes.blue} onClick={this.hello}>Hi, I'm a React App</h1>
                <span className={[classes.bold, classes.transformed].join(' ')}>And I'm really working</span>
            </div>
        </ErrorBoundary>
    );
}

export default HelloWorld;