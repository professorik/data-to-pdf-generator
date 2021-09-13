// eslint-disable-next-line no-use-before-define
// @ts-ignore
import React from 'react';
import {Leaflet, RecipeWrapper} from './components/components';
import {GlobalStyle,UserPage} from "./styles";
import {getRecipes} from "../../helpers/helpers";

function Recipes() {
    const data = getRecipes();
    var nums = Array.from(Array(Math.floor(2+Math.random() * 4)).keys());
    const renderRecipes = data.map((recipe) => (
        <UserPage>
            <Leaflet recipe={recipe}/>
            <Leaflet recipe={recipe}/>
            { nums.map(it => <RecipeWrapper recipe={recipe} num={it}/>) }
            { nums.length % 2 && <RecipeWrapper recipe={null} num={1}/>}
        </UserPage>
    ));

    return (
        <>
            <GlobalStyle/>
            <React.Fragment>
                {renderRecipes}
            </React.Fragment>
        </>
    );
}

export default Recipes;
