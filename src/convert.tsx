// @ts-ignore
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, '../out/index.html'), 'utf8');
const puppeteer = require('puppeteer')

convert();

async function convert() {
    await convertPuppeteer();
}

async function convertPuppeteer() {
    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: {width : 797, height : 1123}
    });
    const page = await browser.newPage();
    await page.setContent(html, {
        waitUntil: ['domcontentloaded', 'networkidle2', 'networkidle0', 'load'],
        timeout: 120000,
        viewport: { width: 797, height: 1123 }
    });
    await page.pdf({
        format: 'A4',
        printBackground: true,
        path: `./test2.pdf`,
        scale: 1.17
    });
    await browser.close();
    console.log('Puppeteer export is successful.');
}
