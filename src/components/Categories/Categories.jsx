import React from 'react';

const Categories = ({ items, onClickItem }) => {
    const [activeItem, setActiveItem] = React.useState(0);

    const onSelectItem = (index) => {
        setActiveItem(index);
    };

    return (
        <div className="categories">
            <ul>
                {items &&
                    items.map((name, index) => (
                        <li
                            className={index === activeItem ? 'active' : ''}
                            onClick={() => onSelectItem(index)}
                            key={name}>
                            {name}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Categories;
