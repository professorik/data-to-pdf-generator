// eslint-disable-next-line no-use-before-define
// @ts-ignore
import React, {FC} from "react";
import {BoldLabel, Card, Label, RedLabel, LabelsContainer} from './styles';
import {User} from "../../../../../common/types/user-leaflet/user.type";
const QRCode = require('qrcode.react');

type Props = {
    user: User;
};

const Info: FC<Props> = ({user}) => {
    const logo = "https://raw.githubusercontent.com/professorik/data-to-pdf-generator/b0ccc2696ca093199f24f71a9a06ed17d6968c07/assets/Wyldr_logo_bigicon%403x.svg";
    return (
        <Card>
            <QRCode
                value={"https://app.wyldr.de/dashboard?utm_source=leaflet&utm_medium=print"}
                size={64}
                renderAs={'svg'}
                imageSettings={
                    {
                        src: logo,
                        height: 16,
                        width: 16,
                        x: null,
                        y: null,
                        excavate: false,
                    }
                }
            />
            <LabelsContainer>
                <BoldLabel>Wähle Deine nächsten Bio-Rezepte</BoldLabel>
                <Label>bis Montag, den 16.08. um 23:00 Uhr</Label>
                <BoldLabel>Deine nächste Lieferung kommt</BoldLabel>
                <Label>am <RedLabel>Donnerstag, den 19.08.</RedLabel></Label>
                <Label>(im gewünschten Lieferfenster)</Label>
                <BoldLabel>Verwalte Dein wyldr-Abo</BoldLabel>
                <Label>unter app.wyldr.de/dashboard</Label>
            </LabelsContainer>
        </Card>
    );
};

export default Info;
