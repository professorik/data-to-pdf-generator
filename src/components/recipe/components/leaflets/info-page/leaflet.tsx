// eslint-disable-next-line no-use-before-define
import React, {FC} from "react";
import {Recipe} from "../../../../../common/types/recipe/recipe.type";
import {Container} from './styles'
import {FooterLabel, IdLabel, LeftItem, RightItem} from "../../recipe-wrapper/styles";
import ImageContainer from "../../recipe-wrapper/photo-container/photo-container";
import Tip from "../../recipe-wrapper/tip/tip";
import NutrientsList from "../../recipe-wrapper/nutrients/nutrients-list";
import IngredientsList from "../../recipe-wrapper/ingredients/ingredients-list";
import Instruction from "../../recipe-wrapper/instruction/instruction";

type Props = {
    recipe: Recipe;
};

const Leaflet: FC<Props> = ({recipe}) => {
    return (
        <Container>
            <LeftItem>
                <h4>Hi {recipe.firstname} </h4>
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
        </Container>
    );
};

export default Leaflet;
