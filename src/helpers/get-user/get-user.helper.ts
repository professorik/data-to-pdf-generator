'use strict';
import {User} from "../../common/types/types";
import os from "os";
const fs = require('fs');

const jsonPath = os.tmpdir() + '/DB_users.json';

//import userDB from "../../../users.json"

const getUser = (
): User[] | null => {
    // @ts-ignore
    return userDB;
};

const getUsers = (): User[] => {
    if (fs.existsSync(jsonPath)){
        return getUserFromApiJSON();
    }
    return getUser();
}

const getUserFromApiJSON = (): User[] => {
    const json = fs.readFileSync(jsonPath, 'utf-8');
    fs.unlinkSync(jsonPath);
    return getUsersListFromDB(JSON.parse(json));
}

const getUsersListFromDB = (list):User[] => {
    return list.map(it => {
        return {
            "user_id": it.user_id,
            "print_id": it.print_id,
            "locale": it.locale,
            "salutation_text": it.salutation_text,
            "info_title": it.info_title,
            "referral_title": it.referral_title,
            "referral_text": it.referral_text,
            "referral_promo_text": it.referral_promo_text,
            "referral_sub_text1": it.referral_sub_text1,
            "referral_sub_text2": it.referral_sub_text2,
            "referral_code": it.referral_code,
            "smart_leftover_title": it.smart_leftover_title,
            "repackaging_title1": it.repackaging_title1,
            "repackaging_title2": it.repackaging_title2,
            "leftovers_tips": it.leftovers_tips
        }
    });
}


export { getUsers };
