// eslint-disable-next-line no-use-before-define
// @ts-ignore
import React, {FC} from "react";
import { Container, Ava, Card, Label, Sign, Icon } from './styles';
import {Avatar} from '@material-ui/core';
// @ts-ignore
import lampIcon from "../../../../../../assets/light-bulb 1.png";
// @ts-ignore
import avatar from "../../../../../../assets/author_round.png";

type Props = {
  tip: string;
};

const Tip: FC<Props> = ({tip}) => {
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
