import React from "react";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";


function App() {

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories items={[
                            'Все',
                            'Мясные',
                            'Вегетарианская',
                            'Гриль',
                            'Острые',
                            'Закрытые'
                        ]}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
