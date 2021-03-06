// eslint-disable-next-line no-use-before-define
// @ts-ignore
import React from 'react';
import {Info, RecipeWrapper, Welcome} from './components/components';
import {GlobalStyle, UserPage} from "./styles";
import {getRecipes, getUsers} from "../../helpers/helpers";

function Recipes() {
    const data = getRecipes();
    const users = getUsers();
    let page = 0;
    const renderRecipes = users.map((user) => {
        const recipes = data.filter(recipe => recipe.user_id === user.user_id);
        const temp = recipes.length + recipes.length%2;
        page += temp + 2;
        return (
            <UserPage>
                <Welcome user={user}/>
                <Info user={user}/>
                {recipes.map((it, ind) => <RecipeWrapper recipe={it} num={ind} page={page+ind-temp}/>)}
                {recipes.length % 2 === 1 && <RecipeWrapper recipe={null} num={1} page={-1}/>}
            </UserPage>
        )
    });

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
