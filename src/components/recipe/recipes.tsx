// eslint-disable-next-line no-use-before-define
// @ts-ignore
import React from 'react';
import {Info, RecipeWrapper, Welcome} from './components/components';
import {GlobalStyle, UserPage} from "./styles";
import {getRecipes, getUser} from "../../helpers/helpers";

function Recipes() {
    const data = getRecipes();
    const users = getUser();
    const l = 4;//Math.floor(2+Math.random() * 4);
    const nums = Array.from(Array(l).keys());

    const renderRecipes = data.map((recipe) => (
        users.map(it => (
            <UserPage>
                <Welcome user={it}/>
                <Info recipe={recipe}/>
                <div>
                    {nums.map(it => <RecipeWrapper recipe={recipe} num={it}/>)}
                    {nums.length % 2 === 1 && <RecipeWrapper recipe={null} num={1}/>}
                </div>
            </UserPage>
        ))
    ));

    return (
        <>
            <GlobalStyle/>
            <React.Fragment>
                {renderRecipes.concat(renderRecipes)}
            </React.Fragment>
        </>
    );
}

export default Recipes;
