// eslint-disable-next-line no-use-before-define
// @ts-ignore
import React, {FC} from "react";
import { Container, Ava, Card, Sign } from './styles';
import {Avatar} from '@material-ui/core';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
// @ts-ignore
import avatar from "../../../../../../assets/Simon.png";

type Props = {
  wishes: string;
  author: string;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      large: {
        width: theme.spacing(8),
        height: theme.spacing(8),
      }
    }),
);

const Wishes: FC<Props> = ({wishes, author}) => {
  const classes = useStyles();
  return (
    <Container>
      <Card>
        <Ava>
          <Avatar src={avatar} className={classes.large}/>
        </Ava>
        <Sign>
          <p>{wishes}<b>stay wyld!</b></p>
          <p style={{color: "gray"}}>{author}</p>
        </Sign>
      </Card>
    </Container>
  );
};

export default Wishes;
