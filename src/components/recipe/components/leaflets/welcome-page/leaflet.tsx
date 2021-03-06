// eslint-disable-next-line no-use-before-define
import React, {FC} from "react";
import {User} from "../../../../../common/types/types";
import {Container, IdLabel, Logo, ReferralCode} from './styles'
import Wishes from "../wishes-container/wishes";
import Referral from "../referral-container/referral";
import Info from "../useful-information/usefulInfo";
// @ts-ignore
import logo from "../../../../../../assets/Wyldr_logo_bigicon@3x.svg";
// @ts-ignore
import background from "../../../../../../assets/background.png";

type Props = {
    user: User;
};

const Leaflet: FC<Props> = ({user}) => {
    const isDe = user.locale === "de";
    return (
        <Container style={{backgroundImage: `url(${background})`}}>
            <Logo src={logo}/>
            <p>{user.salutation_text} </p>
            <br/>
            {isDe ?
                <p>Wir starten gemeinsam in eine weitere wylde Woche und kommen unserer
                    Vision von einer <b>grüneren</b> und <b>gesünderen Zukunft</b> so wieder ein Stück näher.
                    &#128578; Du weißt, wie der Hase läuft! <br/><br/>
                    Zöger' also nicht, wenn Du Anregungen, Wünsche oder Fragen hast! Melde Dich
                    einfach unter: <a href="mailto:feedback@wyldr.de">feedback@wyldr.de</a>. Wir hoffen, dass Du zufrieden mit Deinen
                    gewählten Rezepten bist und wünschen Dir viel Spaß beim Kochen und
                    Genießen!
                </p>
                :
                <p>Another day on the wyldr side of life! Your commitment brings us closer to our
                    goal to bring <b>healthy</b> and <b>eco-friendly eating</b> to everyone &#128578;
                    <br/><br/>
                    You should know the drill by now. Don’t hestitate to give us your feedback on <a href="mailto:feedback@wyldr.de">feedback@wyldr.de</a>.
                    We hope you’ll like this week’s recipes!
                </p>
            }
            <Wishes
                wishes={isDe? "Guten Appetit und ": "Enjoy and "}
                author={isDe? "Simon, Mitbegründer": "Simon, co-founder"}
            />
            <h2>{user.info_title}</h2>
            <Info user={user}/>
            <h2>{user.referral_title}</h2>
            <p>{user.referral_text}</p>
            <ReferralCode>{user.referral_promo_text}</ReferralCode>
            <Referral user={user}/>
            <IdLabel>{user.print_id}</IdLabel>
        </Container>
    );
};

export default Leaflet;
