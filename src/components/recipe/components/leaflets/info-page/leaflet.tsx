// eslint-disable-next-line no-use-before-define
import React, {FC} from "react";
import {User} from "../../../../../common/types/types";
import {Container, Label, AdvContainer} from './styles'
import Advantage from "../advantages-item/advantage";
import Card from "../card/card";
// @ts-ignore
import img_1 from "../../../../../../assets/Group 2528.svg";
// @ts-ignore
import img_2 from "../../../../../../assets/Group 2415.svg";
// @ts-ignore
import img_3 from "../../../../../../assets/Group 2524.svg";
// @ts-ignore
import img_4 from "../../../../../../assets/Group 2531.svg";
// @ts-ignore
import img_5 from "../../../../../../assets/Group 2530.svg";
// @ts-ignore
import img_6 from "../../../../../../assets/Group 2532.svg";
// @ts-ignore
import background from "../../../../../../assets/background.png";

type Props = {
    user: User;
};

const Leaflet: FC<Props> = ({user}) => {
    //todo: make en.ts, de.ts
    let translations: string[][] = new Array(6);
    for (let i = 0; i < translations.length; i++) {
        translations[i] = new Array(2);
    }
    const text = user.locale === "de"? "Wir beliefern Dich mit herkömmlichen Verpackungsgrößen und geben Dir " +
        "Tipps an die Hand, wie Du die übrigen Lebensmittel in Deinen wöchentlichen " +
        "Kochplan integrierst: Mehr Zutaten, weniger Müll!":
        "We do not portionize the food to avoid unnecessary waste. Instead, we send " +
        "you full-size products and give you some tips below to integrate the leftovers " +
        "into your week plan: more food, less waste!";
    if (user.locale === "de") {
        translations[0][0] = "Weniger Plastik";
        translations[1][0] = "Keine Zusatzkosten";
        translations[2][0] = "Mehr Vielfalt";
        translations[3][0] = "Smartes Aufbrauchen";
        translations[4][0] = "Hilfreiche Tipps";
        translations[5][0] = "Gesunde Snacks";
        translations[0][1] = "Keine Umweltbelastung durch unnötige Verpackungen";
        translations[1][1] = "Wir konzentrieren uns lieber auf höchste Qualität";
        translations[2][1] = "Wähle zwischen vielen unterschiedlichen Rezepten";
        translations[3][1] = "Haltbare Produkte werden in anderen Rezepten verwendet";
        translations[4][1] = "Für die Aufbewahrung und Verwertung übriger Zutaten";
        translations[5][1] = "Nährstoffreiche Bio-Lebensmittel sind ideal zum Snacken";
    } else {
        translations[0][0] = "Less plastic";
        translations[1][0] = "Lower cost";
        translations[2][0] = "More recipes";
        translations[3][0] = "Smart surplus management";
        translations[4][0] = "Useful kitchen tips";
        translations[5][0] = "Healthy snacking";
        translations[0][1] = "No unnecessary packaging polluting mother Earth";
        translations[1][1] = "No additional costs, we rather focus on quality";
        translations[2][1] = "We can offer a large selection of organic dishes";
        translations[3][1] = "Dry and durable products can be used for next deliveries";
        translations[4][1] = "on how you can use leftover ingredients or conserve them longer";
        translations[5][1] = "Organic nutrient-rich ingredients are ideal snacks";
    }
    return (
        <Container style={{backgroundImage: `url(${background})`}}>
            <h2 style={{color: "#07d7bf;"}}>{user.repackaging_title1}</h2>
            <br/>
            <AdvContainer>
                <Advantage
                    url={img_1}
                    title={translations[0][0]}
                    description={translations[0][1]}
                />
                <Advantage
                    url={img_2}
                    title={translations[1][0]}
                    description={translations[1][1]}
                />
                <Advantage
                    url={img_3}
                    title={translations[2][0]}
                    description={translations[2][1]}
                />
            </AdvContainer>
            <br/>
            <h2 style={{color: "#07d7bf;"}}>{user.repackaging_title2}</h2>
            <br/>
            <AdvContainer>
                <Advantage
                    url={img_4}
                    title={translations[3][0]}
                    description={translations[3][1]}
                />
                <Advantage
                    url={img_5}
                    title={translations[4][0]}
                    description={translations[4][1]}
                />
                <Advantage
                    url={img_6}
                    title={translations[5][0]}
                    description={translations[5][1]}
                />
            </AdvContainer>
            <br/><br/>
            <Card isDe={user.locale==="de"}/>
            <br/>
            <h2>{user.smart_leftover_title}</h2>
            <Label>{text}</Label>
            <br/>
            {user.leftovers_tips.map(it => <Label>{it}</Label>)}
        </Container>
    );
};

export default Leaflet;
