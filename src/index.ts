import puppeteer from 'puppeteer';
import fs from 'fs';

console.log(123);

const scrape = async () => {
   const browser = await puppeteer.launch();
   // const page = await browser.newPage();

   // await page.goto('https://www.pepperworldhotshop.com/en/bbq-shop/fresh-chillies/');

   // const res = await page.evaluate('div.picture a');

   // console.log(res);

   // await browser.close();
};

scrape();