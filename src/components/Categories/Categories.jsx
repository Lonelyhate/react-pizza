import React from 'react';

const Categories = React.memo(({ activeCategory, items, onClickItem }) => {


    return (
        <div className="categories">
            <ul>
                {items &&
                    items.map((name, index) => (
                        <li
                            className={index === activeCategory ? 'active' : ''}
                            onClick={() => onClickItem(index)}
                            key={name}>
                            {name}
                        </li>
                    ))}
            </ul>
        </div>
    );
});

export default Categories;
