import React from 'react';

export default function star(vote) {

    const stars = [];
    const empty = [];

    for (let i = 0; i < vote; i++) {
        stars.push(<i key={`star-${i}`} className="bi bi-star-fill text-warning"></i>);
    }

    for (let i = 0; i < 5 - vote; i++) {
        empty.push(<i key={`empty-${i}`} className="bi bi-star text-warning"></i>);
    }

    return [...stars, ...empty];
}