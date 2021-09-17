// eslint-disable-next-line no-use-before-define
import React, {FC} from "react";
import {Label} from './styles'

type Props = {
    step: string;
};

const InstructionItem: FC<Props> = ({step}) => {
    const info = step.split(" === ");
    return (
        <div>
            <Label ingredients>{info[1]}</Label>
            <Label>{info[0]}</Label>
            <br/>
        </div>
    );
};

export default InstructionItem;
