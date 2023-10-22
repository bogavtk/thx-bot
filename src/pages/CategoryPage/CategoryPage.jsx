import React from 'react';
import {Filter} from "../../components/Filter/Filter";

const listFilters = [
    {nameFilter: 'Все товары'},
    {nameFilter: 'Женские'},
    {nameFilter: 'Мужские'},
]

export const CategoryPage = () => {
    return (
        <Filter namePage={'Категории'} listFilters={listFilters}/>
    );
};

