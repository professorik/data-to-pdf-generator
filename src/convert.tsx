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
        pipe: true,
        args: ['--headless', '--disable-gpu', '--full-memory-crash-report', '--unlimited-storage',
            '--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
        ignoreHTTPSErrors: true,
        headless: true,
    });
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto('file://' + path.join(__dirname, '../out/index.html'),{
        waitUntil: ['domcontentloaded', 'networkidle2', 'networkidle0', 'load']
    });
    await page.pdf({
        preferCSSPageSize: true,
        format: 'A4',
        printBackground: true,
        path: `./result.pdf`
    });
    await browser.close();
    console.log('Puppeteer export is successful.');
}
