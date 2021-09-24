const express = require('express');
const router = express.Router();
const service = require("../services/PageService");

router.get('/recipes', async function(req, res, next) {
    try {
        await service.getRecipesFromDB();
        console.log('PDF has been generated');
        const file = `${process.cwd()}/result.pdf`;
        res.sendFile(file);
    }catch (err){
        console.error(err.message);
        next(err);
    }
});

router.get('/log',  (req, res) => {
    const file = `${process.cwd()}/log.txt`;
    res.sendFile(file);
});

module.exports = router;
export {};
