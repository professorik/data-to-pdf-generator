// eslint-disable-next-line no-use-before-define
// @ts-ignore
import React from 'react';
import {Leaflet, RecipeWrapper} from './components/components';
import {GlobalStyle,UserPage} from "./styles";
import {getRecipes} from "../../helpers/helpers";

function Recipes() {
    const data = getRecipes();
    const renderRecipes = data.map((recipe) => (
        <UserPage>
            <Leaflet recipe={recipe}/>
            <RecipeWrapper recipe={recipe}/>
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
