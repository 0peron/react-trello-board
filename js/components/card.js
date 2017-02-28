import React from 'react';

export default function Card(props) {
    return (
        <div className="card">
        <p className="cardname">{props.name}</p>
        </div>
    );
}
