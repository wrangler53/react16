import React from 'react';

export default class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, errorMsg) => {
        this.setState({
            hasError: true,
            errorMessage: errorMsg
        })
    }

    render() {
        return((this.setState.hasError) ? <h1>Smth going wrong</h1> : this.props.children );
    }
} 