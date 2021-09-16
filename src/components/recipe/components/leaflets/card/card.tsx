// eslint-disable-next-line no-use-before-define
// @ts-ignore
import React, {FC} from "react";
import {Container,LabelsContainer} from './styles';
import {Avatar} from '@material-ui/core';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        normal: {
            width: theme.spacing(8),
            height: theme.spacing(8),
        }
    }),
);

type Props = {
    isDe: boolean;
};

const Card: FC<Props> = ({isDe}) => {
    const classes = useStyles();
    const avatar = "https://github.com/professorik/data-to-pdf-generator/blob/master/assets/author_round.png?raw=true";
    const translations = isDe? ["Du fragst dich, wofür der vorbereitete Briefumschlag ist?", "Gib deine " +
    "Baumwolltaschen optimalerweise bei der nächsten Lieferung zurück oder schicke sie " +
    "alternativ per Brief kostenlos zurück. Wir erstatten dir dann den Pfand!"]: [
        "Wondering what the stamped envelope is about?",
        "Return our cotton bags with your next delivery or send them back via post free of charge!"
    ];
    return (
        <Container>
            <div style={{display: "flex;"}}>
                <Avatar src={avatar} className={classes.normal}/>
                <LabelsContainer>
                    <b>{translations[0]}</b>
                    <p>{translations[1]}</p>
                </LabelsContainer>
            </div>
        </Container>
    );
};

export default Card;
