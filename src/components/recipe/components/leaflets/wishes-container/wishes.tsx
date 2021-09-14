// eslint-disable-next-line no-use-before-define
// @ts-ignore
import React, {FC} from "react";
import { Container, Ava, Card, Label, Sign } from './styles';
import {Avatar} from '@material-ui/core';

type Props = {
  wishes: string;
};

const Wishes: FC<Props> = ({wishes}) => {
  const avatar = "https://github.com/professorik/data-to-pdf-generator/blob/feature/orientation/assets/author_round.png?raw=true";
  return (
    <Container>
      <Card>
        <Ava>
          <Avatar src={avatar}/>
        </Ava>
        <div>
          <Label>{wishes}</Label>
          <Sign>Simon, Mitbegründer</Sign>
        </div>
      </Card>
    </Container>
  );
};

export default Wishes;
