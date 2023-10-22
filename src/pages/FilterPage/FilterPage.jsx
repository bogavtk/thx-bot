import React from 'react';
import {Filter} from "../../components/Filter/Filter";

const listFilters = [
    {nameFilter: 'По умолчанию'},
    {nameFilter: 'По убыванию'},
    {nameFilter: 'По возрастанию'},
    {nameFilter: 'Новинки'},
]

export const FilterPage = () => {
    return (
        <Filter namePage='Фильтр' listFilters={listFilters}/>
    );
};

