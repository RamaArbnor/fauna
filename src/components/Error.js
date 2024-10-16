import React from 'react';

const ErrorPage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 style={{ color: 'red' }}>404 - Faqja nuk u gjet</h1>
            <p style={{ fontSize: '18px' }}>Na vjen keq, faqja që po kërkoni nuk ekziston.</p>
            <a href='/' style={{ fontSize: '18px' }}>Ktheu ne Krye</a>
        </div>
    );
};

export default ErrorPage;
