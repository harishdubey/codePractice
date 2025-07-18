import React, { Children } from 'react';

class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false, error: null
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }

    componentDidCatch(error, errorInfo) {
        console.log("Error caught in boundry", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return <h2> {this.state.error.toString()}</h2>
        }
        return this.props.children;
    }

}

export default ErrorBoundry