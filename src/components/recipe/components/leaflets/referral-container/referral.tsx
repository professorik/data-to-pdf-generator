// eslint-disable-next-line no-use-before-define
// @ts-ignore
import React, {FC} from "react";
import {Card, Label, LabelsContainer} from './styles';
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
            <QRCode
                value={`https://wa.me/?text=${link}`}
                size={64}
                renderAs={'svg'}
            />
            <LabelsContainer>
                <Label>{user.referral_sub_text1}</Label>
                <h3>{user.referral_code}</h3>
                <Label>{user.referral_sub_text2}</Label>
            </LabelsContainer>
        </Card>
    );
};

export default Referral;
