// eslint-disable-next-line no-use-before-define
import React, {FC} from "react";
import {User} from "../../../../../common/types/types";
import {Container, Label} from './styles'
import Advantage from "../advantages-item/advantage";
import Card from "../card/card";

type Props = {
    user: User;
};

const Leaflet: FC<Props> = ({user}) => {
    return (
        <Container>
            <Label bold aqua>{user.repackaging_title1}</Label>
            <div style={{display: "flex"}}>
                <Advantage
                    url={"https://raw.githubusercontent.com/professorik/data-to-pdf-generator/b0ccc2696ca093199f24f71a9a06ed17d6968c07/assets/Wyldr_logo_bigicon%403x.svg"}
                    title={"Weniger Plastik"}
                    description={"Keine Umweltbelastung\n" +
                    "durch unnötige\n" +
                    "Verpackungen"}
                />
                <Advantage
                    url={"https://raw.githubusercontent.com/professorik/data-to-pdf-generator/b0ccc2696ca093199f24f71a9a06ed17d6968c07/assets/Wyldr_logo_bigicon%403x.svg"}
                    title={"Keine Zusatzkosten"}
                    description={"Wir konzentrieren uns\n" +
                    "lieber auf höchste\n" +
                    "Qualität"}
                />
                <Advantage
                    url={"https://raw.githubusercontent.com/professorik/data-to-pdf-generator/b0ccc2696ca093199f24f71a9a06ed17d6968c07/assets/Wyldr_logo_bigicon%403x.svg"}
                    title={"Mehr Vielfalt"}
                    description={"Wähle zwischen vielen\n" +
                    "unterschiedlichen\n" +
                    "Rezepten"}
                />
            </div>
            <Label bold aqua>{user.repackaging_title2}</Label>
            <div style={{display: "flex"}}>
                <Advantage
                    url={"https://raw.githubusercontent.com/professorik/data-to-pdf-generator/b0ccc2696ca093199f24f71a9a06ed17d6968c07/assets/Wyldr_logo_bigicon%403x.svg"}
                    title={"Smartes Aufbrauchen"}
                    description={"Haltbare Produkte\n" +
                    "werden in anderen\n" +
                    "Rezepten verwendet"}
                />
                <Advantage
                    url={"https://raw.githubusercontent.com/professorik/data-to-pdf-generator/b0ccc2696ca093199f24f71a9a06ed17d6968c07/assets/Wyldr_logo_bigicon%403x.svg"}
                    title={"Hilfreiche Tipps"}
                    description={"Für die Aufbewahrung\n" +
                    "und Verwertung\n" +
                    "übriger Zutaten"}
                />
                <Advantage
                    url={"https://raw.githubusercontent.com/professorik/data-to-pdf-generator/b0ccc2696ca093199f24f71a9a06ed17d6968c07/assets/Wyldr_logo_bigicon%403x.svg"}
                    title={"Gesunde Snacks"}
                    description={"Nährstoffreiche\n" +
                    "Bio-Lebensmittel sind\n" +
                    "ideal zum Snacken"}
                />
            </div>
            <Card/>
            <Label bold>{user.smart_leftover_title}</Label>
            <Label>Wir beliefern Dich mit herkömmlichen Verpackungsgrößen und geben Dir
                Tipps an die Hand, wie Du die übrigen Lebensmittel in Deinen wöchentlichen
                Kochplan integrierst: Mehr Zutaten, weniger Müll!</Label>
            <Label>{user.salutation_text} </Label>
        </Container>
    );
};

export default Leaflet;
