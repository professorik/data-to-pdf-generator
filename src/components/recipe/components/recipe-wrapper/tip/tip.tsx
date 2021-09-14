// eslint-disable-next-line no-use-before-define
// @ts-ignore
import React, {FC} from "react";
import { Container, Ava, Card, Label, Sign, Icon } from './styles';
import {Avatar} from '@material-ui/core';

type Props = {
  tip: string;
};

const Tip: FC<Props> = ({tip}) => {
  const lampIcon = "https://github.com/professorik/data-to-pdf-generator/blob/feature/orientation/assets/light-bulb%201.png?raw=true";
  const avatar = "https://github.com/professorik/data-to-pdf-generator/blob/feature/orientation/assets/author_round.png?raw=true";
  return (
    <Container>
      <Icon src={lampIcon} alt={"icon_tip"} />
      <Card>
        <Ava>
          <Avatar src={avatar}/>
        </Ava>
        <Label>{tip}</Label>
      </Card>
      <Sign>
          <span>Steffi, Ernährungswissenschaftlerin</span>
      </Sign>
    </Container>
  );
};

export default Tip;
