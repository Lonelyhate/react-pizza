import React from 'react';
import ContentLoader from 'react-content-loader';

const LoaderPizza = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={457}
        viewBox="0 0 280 457"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <circle cx="140" cy="130" r="130" />
        <rect x="0" y="273" rx="3" ry="3" width="280" height="24" />
        <rect x="0" y="314" rx="10" ry="10" width="280" height="83" />
        <rect x="130" y="409" rx="25" ry="25" width="151" height="44" />
        <rect x="0" y="418" rx="3" ry="3" width="89" height="27" />
    </ContentLoader>
);

export default LoaderPizza;
