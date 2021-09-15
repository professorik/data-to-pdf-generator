// eslint-disable-next-line no-use-before-define
// @ts-ignore
import React, {FC} from "react";
import {Card, Label} from './styles';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

type Props = {
    url: string;
    title: string;
    description: string;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        large: {
            width: theme.spacing(13),
            height: theme.spacing(13),
        }
    }),
);

const Advantage: FC<Props> = ({url, title, description}) => {
    const classes = useStyles();
    return (
        <Card>
            <Avatar src={url} className={classes.large} style={{margin: "0 auto;"}}/>
            <Label bold>{title}</Label>
            <Label>{description}</Label>
        </Card>
    );
};

export default Advantage;
