// eslint-disable-next-line no-use-before-define
import React, {FC} from "react";
import {Recipe} from "../../../../common/types/recipe/recipe.type";
import {Container, FooterLabel, IdLabel, Kar, LeftItem, Logo, RightItem} from './styles'
import Tip from "./tip/tip";
import NutrientsList from "./nutrients/nutrients-list";
import IngredientsList from "./ingredients/ingredients-list";
import Instruction from "./instruction/instruction";
import ImageContainer from "./photo-container/photo-container";

type Props = {
    recipe: Recipe;
    num: number;
};

function checkHeight(steps: string[]) {
    let recipesSize = 0;
    steps.forEach(it => {
        let info = it.split(" === ");
        const ing = info[1].split(" ");
        const steps = info[0].split(" ");
        let tempSum = 0;
        for (let i = 0; i < steps.length; i++) {
            tempSum += steps[i].length + 1;
            if (tempSum >= 140) {
                ++recipesSize;
                tempSum = 0;
                --i;
            }
        }
        if (tempSum > 0) {
            ++recipesSize;
            tempSum = 0;
        }
        for (let i = 0; i < ing.length; i++) {
            tempSum += ing[i].length + 1;
            if (tempSum >= 140) {
                ++recipesSize;
                tempSum = 0;
                --i;
            }
        }
        if (tempSum > 0) {
            ++recipesSize;
        }
        ++recipesSize;
    });
    return recipesSize > 55;
}

const RecipeWrapper: FC<Props> = ({recipe, num}) => {
    const logo = "https://raw.githubusercontent.com/professorik/data-to-pdf-generator/b0ccc2696ca093199f24f71a9a06ed17d6968c07/assets/Wyldr_logo_bigicon%403x.svg";
    const divStyle = {
        //background: num % 2 === 0 ? "yellow" : "red",
        transform: num % 2 === 0 ? "rotate(-90deg);" : "rotate(90deg);"
    };
    if (recipe === null) {
        return (
            <Kar>
                <Container style={divStyle}>
                    <Logo src={logo}/>
                </Container>
            </Kar>
        )
    }
    if (checkHeight(recipe.instruction)) {
        console.log(`\n--==Error: number of lines should be less than 50, recipe_id = ${recipe.recipe_id}==--`);
    }
    return (
        <Kar>
            <Container style={divStyle}>
                <LeftItem>
                    <p>Hi <b>{recipe.firstname}</b> </p>
                    <ImageContainer
                        imgUrl={recipe.recipe_image_url}
                        portions={recipe.portions}
                        name={recipe.recipe_category}
                        time={recipe.gross_prep_time}
                        icon={recipe.recipe_category_image_url}
                    />
                    <h3>{recipe.recipe_title} </h3>
                    <Tip tip={recipe.health_tip}/>
                    <NutrientsList nutrients={recipe.nutrients} label={recipe.nutrition_title}/>
                    <IngredientsList ingredients={recipe.ingredients} species={recipe.paos}
                                     label={recipe.recipe_ingredient_title}/>
                </LeftItem>
                <RightItem>
                    <Instruction steps={recipe.instruction} label={recipe.recipe_instruction_title}/>
                </RightItem>
                <FooterLabel>{recipe.recipe_foot_note}</FooterLabel>
                <IdLabel>{recipe.print_id}</IdLabel>
                <Logo src={logo}/>
            </Container>
        </Kar>
    )
};

export default RecipeWrapper;
