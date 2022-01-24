import { useDispatch, useSelector } from 'react-redux';
import Categories from '../components/Categories/Categories';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import SortPopup from '../components/SortPopup/SortPopup';
import { setCategory, setSortBy } from '../redux/actions/filters';
import React from 'react';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart'
import LoaderPizza from '../components/PizzaBlock/LoaderPizza';

const categoryNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавит', type: 'name' },
];

const Home = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);
    const cartItems = useSelector(({cart }) => cart.items)

    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy));
    }, [category, sortBy]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    });

    const handleAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    };

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    items={categoryNames}
                    activeCategory={category}
                />
                <SortPopup
                    onClickSortType={onSelectSortType}
                    activeSortType={sortBy}
                    items={sortItems}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((obj) => (
                          <PizzaBlock
                              onClickAddPizza={handleAddPizzaToCart}
                              key={obj.id}
                              addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                              {...obj}
                          />
                      ))
                    : [...Array(8)].map((item, index) => <LoaderPizza key={index} />)}
            </div>
        </div>
    );
};

export default Home;
