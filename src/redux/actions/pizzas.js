import axios from 'axios';

export const setLoaded = (val) => ({
    type: 'SET_LOADED',
    payload: val,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false));

    category--
    axios
        .get(
            `http://localhost:3001/pizzas?${
                category >= 0 ? `category=${category}` : ''
            }&_sort=${sortBy}&_order=asc`,
        )
        .then(({ data }) => {
            dispatch(setPizzas(data));
        });
};

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});
