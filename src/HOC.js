import React from 'react';

function withAuth(WrappedComponent) {
    return function ProtectedComponent(props) {
        const isAuthenticated = localStorage.getItem("auth") === "true";
        if (!isAuthenticated) {
            return "Access Denied";
        }
        return <WrappedComponent {...props} />
    }
}

function Dashboard() {
    return (
        <div>
            <h2>Welcome to your dashboard</h2>
        </div>
    );
}

const ProtectedComponent = withAuth(Dashboard)

export default ProtectedComponent;