import { render } from '@testing-library/react';
import React, { Component } from 'react';

class ErrorBoundary extends React.Component{
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({ hasError:true, errorMessage: error })
    }

    render(){
    return(
        <div>
            <h2> Something went wrong, Check the Dev tools!!</h2>
        </div>
    )
}
}

export default ErrorBoundary;