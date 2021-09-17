import {Service} from "typedi";
import {HttpServer} from "../../server";
import os from "os";
const child_process = require('child_process');
const fs = require('fs');
const path = require('path');
const get_recipes = fs.readFileSync(path.join(__dirname, '../../../queries/ready_recipes.sql'));
const get_users = fs.readFileSync(path.join(__dirname, '../../../queries/users_leaflet.sql'));

@Service()
export default class PageService {

    async generatePdfFromDiskXlsx() {
        await child_process.execSync('next build && next export && node src/convert.tsx');
    }

    async getRecipesFromDB() {
        const client = await HttpServer.pool.connect();
        let { rows: recipes } = await client.query(get_recipes.toString());
        recipes = await recipes.filter(it => it.show !== '/hide');
        recipes = JSON.stringify(recipes, null, 4);
        await fs.writeFile(os.tmpdir()+'/DB.json', recipes, (err) => {
            if (err) {
                throw err;
            }
            console.log("Recipes JSON data is saved.");
        });
        let { rows: users } = await client.query(get_users.toString());
        users = JSON.stringify(users, null, 4);
        await fs.writeFile(os.tmpdir()+'/DB_users.json', users, (err) => {
            if (err) {
                throw err;
            }
            console.log("Users JSON data is saved.");
            client.release();
            child_process.execSync('next build && next export && node src/convert.tsx');
        });
    }
}
