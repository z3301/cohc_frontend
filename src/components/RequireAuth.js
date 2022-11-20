import React from 'react';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import authStore from '../stores/authStore';

export default function RequireAuth(props) {
    const store = authStore();

    useEffect(() => {
        if (store.loggedIn === null) {
            store.checkAuth();
        }
    }, [store]);

    if (store.loggedIn === null) {
        return <h1>Loading...</h1>;
    }

    if (store.loggedIn === false) {
        return <Navigate to="/login" />;
    }

    return (
        <div>{props.children}</div>
    );
}   