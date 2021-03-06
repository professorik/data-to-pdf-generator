import os from "os";
import {HttpServer} from "../../server";
const child_process = require('child_process');
const fs = require('fs');
const path = require('path');
const get_recipes = fs.readFileSync(path.join(__dirname, '../../../queries/ready_recipes.sql'));
const get_users = fs.readFileSync(path.join(__dirname, '../../../queries/users_leaflet.sql'));
const replace_all = fs.readFileSync(path.join(__dirname, '../../../queries/replacements.sql'));
const finish = fs.readFileSync(path.join(__dirname, '../../../queries/finish.sql'));

async function getRecipesFromDB() {
    //clear log
    fs.writeFileSync("log.txt", "");

    const client = await HttpServer.pool.connect();

    await client.query(replace_all.toString());
    console.log("Step 1 - replaced");

    let {rows: recipes} = await client.query(get_recipes.toString());
    recipes = await recipes.filter(it => it.show !== '/hide');
    recipes = JSON.stringify(recipes, null, 4);
    fs.writeFileSync(os.tmpdir() + '/DB.json', recipes);
    console.log("Step 2 - recipes has been written");

    let {rows: users} = await client.query(get_users.toString());
    users = JSON.stringify(users, null, 4);
    fs.writeFileSync(os.tmpdir() + '/DB_users.json', users);
    console.log("Step 3 - users has been written");

    await client.query(finish.toString());
    console.log("Step 4 - finished sql");

    await client.release();
    //run pdf generator script
    await child_process.execSync('cross-env NODE_OPTIONS=--max_old_space_size=4096 next build && next export');
    console.log("Converting to pdf...");
    await child_process.execSync('node --max_old_space_size=4096 src/convert.tsx');
}

module.exports = {getRecipesFromDB}
