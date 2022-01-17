import Categories from '../components/Categories/Categories';
import SortPopup from '../components/SortPopup/SortPopup';

const Home = () => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
                />
                <SortPopup items={['популярности', 'цене', 'алфавиту']} />
            </div>
        </div>
    );
};

export default Home;
