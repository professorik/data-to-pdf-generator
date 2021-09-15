// eslint-disable-next-line no-use-before-define
import React, {FC} from "react";
import {User} from "../../../../../common/types/types";
import {Container, IdLabel, Label, Logo, ReferralCode} from './styles'
import Wishes from "../wishes-container/wishes";
import Referral from "../referral-container/referral";
import Info from "../useful-information/usefulInfo";

type Props = {
    user: User;
};

const Leaflet: FC<Props> = ({user}) => {
    const logo = "https://raw.githubusercontent.com/professorik/data-to-pdf-generator/b0ccc2696ca093199f24f71a9a06ed17d6968c07/assets/Wyldr_logo_bigicon%403x.svg";
    return (
        <Container>
            <Logo src={logo}/>
            <Label>{user.salutation_text} </Label>
            {user.locale === "de" ?
                <div>
                    <Label>Wir starten gemeinsam in eine weitere wylde Woche und kommen unserer
                        Vision von einer grüneren und gesünderen Zukunft so wieder ein Stück näher.
                        Du weißt, wie der Hase läuft!
                    </Label>
                    <Label>
                        Zöger' also nicht, wenn Du Anregungen, Wünsche oder Fragen hast! Melde Dich
                        einfach unter: . Wir hoffen, dass Du zufrieden mit Deinen
                        gewählten Rezepten bist und wünschen Dir viel Spaß beim Kochen und
                        Genießen!
                    </Label>
                </div> :
                <Label>Another day on the wyldr side of life! Your commitment brings us closer to our
                    goal to bring healthy and eco-friendly eating to everyone
                    You should know the drill by now. Don’t hestitate to give us your feedback on
                    feedback@wyldr.de. We hope you’ll like this week’s recipes!
                </Label>
            }
            <Wishes wishes={"Guten Appetit und stay wyld!"}/>
            <h3>{user.info_title}</h3>
            <Info user={user}/>
            <h3>{user.referral_title}</h3>
            <Label>{user.referral_text}</Label>
            <ReferralCode>{user.referral_promo_text}</ReferralCode>
            <Referral user={user}/>
            <IdLabel>{user.print_id}</IdLabel>
        </Container>
    );
};

export default Leaflet;
