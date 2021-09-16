// eslint-disable-next-line no-use-before-define
// @ts-ignore
import React, {FC} from "react";
import {Card, LabelsContainer, QR} from './styles';
import {User} from "../../../../../common/types/user-leaflet/user.type";

const QRCode = require('qrcode.react');

type Props = {
    user: User;
};

const Referral: FC<Props> = ({user}) => {
    let link = user.locale === "de" ?
        `Erhalte 25% Rabatt auf Deine drei ersten wyldr-Boxen mit dem Code ${user.referral_code} unter app.wyldr.de?coupon=${user.referral_code}` :
        `Get 25% off your three first wyldr boxes with the code ${user.referral_code} on app.wyldr.de?coupon=${user.referral_code}`;
    link = link.replace(/\s/g, '%20');
    return (
        <Card>
            <QR>
                <QRCode
                    value={`https://wa.me/?text=${link}`}
                    size={96}
                    renderAs={'svg'}
                />
            </QR>
            <LabelsContainer>
                <p>{user.referral_sub_text1}</p>
                <br/>
                <h2>{user.referral_code}</h2>
                <br/>
                <p>{user.referral_sub_text2}</p>
            </LabelsContainer>
        </Card>
    );
};

export default Referral;
