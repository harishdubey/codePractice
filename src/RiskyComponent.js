import React, { Children } from 'react';

class RiskyComponent extends React.Component {
    componentDidMount() {
        console.log("test")
        // throw new Error("I crashed intentionally!");
    };
    render() {
        return <div>This will never render.</div>;
    }
}
export default RiskyComponent;