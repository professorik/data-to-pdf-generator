// eslint-disable-next-line no-use-before-define
// @ts-ignore
import React, {FC} from "react";
import {Card, LabelsContainer, QR} from './styles';
import {User} from "../../../../../common/types/user-leaflet/user.type";

const QRCode = require('qrcode.react');

type Props = {
    user: User;
};

const enOptions = {month: 'long', day: 'numeric'} as const;

const Info: FC<Props> = ({user}) => {
    let monday = new Date();
    monday.setDate(monday.getDate() + (((8 - monday.getDay()) % 7) || 7));
    let thursday = new Date();
    thursday.setDate(monday.getDate() + 3);
    const mondayLabel = user.locale === "de" ?
        String(monday.getDate()).padStart(2, '0') + "." + String(monday.getMonth() + 1).padStart(2, '0') :
        monday.toLocaleDateString('en-US', enOptions);
    const thursdayLabel = user.locale === "de" ?
        String(thursday.getDate()).padStart(2, '0') + "." + String(thursday.getMonth() + 1).padStart(2, '0') :
        thursday.toLocaleDateString('en-US', enOptions);
    const logo = "https://raw.githubusercontent.com/professorik/data-to-pdf-generator/b0ccc2696ca093199f24f71a9a06ed17d6968c07/assets/Wyldr_logo_bigicon%403x.svg";
    const translations = user.locale === "de" ? [`Wähle Deine nächsten Bio-Rezepte`, `bis Montag, den ${mondayLabel}. um 23:00 Uhr`,
            "Deine nächste Lieferung kommt", "am", `Donnerstag, den ${thursdayLabel}.`, "(im gewünschten Lieferfenster)", "Verwalte Dein wyldr-Abo",
            "unter app.wyldr.de/dashboard"] :
        [`Select your next recipes`, `by Mon, ${mondayLabel}th 23:00`,
            "You next possible delivery will be", "on", `Thu, ${thursdayLabel}th`, "(in the desired time window)", "Manage your subscription in the app",
            "on app.wyldr.de/dashboard"];
    return (
        <Card>
            <QR>
                <QRCode
                    value={"https://app.wyldr.de/dashboard?utm_source=leaflet&utm_medium=print"}
                    size={96}
                    renderAs={'svg'}
                    imageSettings={
                        {
                            src: logo,
                            height: 32,
                            width: 32,
                            x: null,
                            y: null,
                            excavate: false,
                        }
                    }
                />
            </QR>
            <LabelsContainer>
                <b>{translations[0]}</b>
                <p>{translations[1]}</p>
                <br/><br/>
                <b>{translations[2]}</b>
                <p>{translations[3]} <b style={{color: "#ff6376;"}}>{translations[4]}</b></p>
                <p>{translations[5]}</p>
                <br/><br/>
                <b>{translations[6]}</b>
                <p>{translations[7]}</p>
            </LabelsContainer>
        </Card>
    );
};

export default Info;
