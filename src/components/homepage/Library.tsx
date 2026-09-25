import React from 'react';

const getFitLogData = async () => {
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await response.json();
    return data;
};

const Library = () => {
    const fitLogData = getFitLogData();
    return (
        <div>
            <div>
                <h2>The Library</h2>
                <p>Twelve lifts covering every major muscle group.</p>
            </div>
        </div>
    );
};

export default Library;