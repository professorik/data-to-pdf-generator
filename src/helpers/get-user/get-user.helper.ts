'use strict';
import {User} from "../../common/types/types";
import userDB from "../../../users.json"

const getUser = (
): User[] | null => {
    // @ts-ignore
    return userDB;
};

export { getUser };
