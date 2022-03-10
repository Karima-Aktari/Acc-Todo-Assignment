import React from 'react';
import PaginatedShopItem from './PaginatedShopItem';

const PaginatedShopHome = () => {
    return (
        <div>
            <PaginatedShopItem itemsPerPage={8} />
        </div>
    );
};

export default PaginatedShopHome;
