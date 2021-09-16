// eslint-disable-next-line no-use-before-define
// @ts-ignore
import React from "react";
import {Container, Label} from './styles';
import {Avatar} from '@material-ui/core';

const Card = () => {
    const avatar = "https://github.com/professorik/data-to-pdf-generator/blob/master/assets/author_round.png?raw=true";
    return (
        <Container>
            <div style={{display: "flex;"}}>
                <Avatar src={avatar}/>
                <div>
                    <Label bold>Du fragst dich, wofür der vorbereitete Briefumschlag ist?</Label>
                    <Label>Gib
                        deine Baumwolltaschen optimalerweise bei der nächsten
                        Lieferung zurück oder schicke sie alternativ per Brief kostenlos
                        zurück. Wir erstatten dir dann den Pfand!</Label>
                </div>
            </div>
        </Container>
    );
};

export default Card;
