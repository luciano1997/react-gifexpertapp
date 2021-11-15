import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { AddCategory } from './AddCategory';
import GifGrid from './GifGrid';
//import { ConsumoApi } from './ConsumoApi';



export const GiftExpertApp = (personajes) => {

    const [categories, setCategories] = useState(['One Punch']);

    // const HandleAdd = () => {
    //     // categories.push('Hunter X Hunter')
    //     //console.log(categories);
    //     setcategories( [...categories, 'Cazador X']);
    //     //setcategories( cats =>  [...cats, 'Cazador X']);
    // }

    //console.log(setCategories);
    return <Fragment>

        <h2> GiftExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr />

        <ol>
            {
                categories.map(category => (
                    //    <li key={ category }> { category } </li>
                    <GifGrid 
                        key={category}
                        category={category} />
                ))
            }
        </ol>

    </Fragment>
}

export default GiftExpertApp;

// categories.map( (categoria) => 

// <GiftGrid category = {categoria}
// key={categoria} 
// />
// )