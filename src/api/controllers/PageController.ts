import {Controller, Body, Post, Get, UploadedFile, BadRequestError, UseBefore, Req, Res} from 'routing-controllers';
import fileUploadMiddleware from "../middlewares/fileUploadMiddleware";
import { Request } from 'express';
import PageService from "../services/PageService";
import {promisify} from "util";
import os from "os";
import {getMostRecent} from "../../helpers/helpers";

//todo: move into special place
const allowedFileTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

@Controller()
export class PageController {
    private pageService: PageService;
    constructor(){
        this.pageService = new PageService();
    }

    @Post('/generate')
    @UseBefore(fileUploadMiddleware('input', allowedFileTypes, 1024 * 1024 * 4))
    async post(@Req() req: Request, @Res() res: any) {
        // fs.readFileAsync(file.path) in case of saving to disk
        await this.pageService.generatePdfFromXlsx(req.file.buffer);
        const out = getMostRecent(os.tmpdir() + '\\recipeApp\\out\\');
        // @ts-ignore
        const file = os.tmpdir() + `\\recipeApp\\out\\${out.name}`;
        await promisify<string, void>(res.sendFile.bind(res))(file)
        // @ts-ignore
        fs.unlinkSync(os.tmpdir() + `\\recipeApp\\out\\${out.name}`);
        return res;
    }
}
