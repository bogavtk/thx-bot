import React from 'react';
import {Filter} from "../../components/Filter/Filter";

const listFilters = [
    {nameFilter: 'Все товары'},
    {nameFilter: 'Женская обувь'},
    {nameFilter: 'Мужская обувь'},
]


export const CategoryPage = () => {
    return (
        <Filter namePage={'Категории'} listFilters={listFilters}/>
    );
};

