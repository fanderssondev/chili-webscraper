import puppeteer from 'puppeteer';
import fs from 'fs/promises';

const baseURL = 'https://www.pepperworldhotshop.com/en/bbq-shop/fresh-chillies/';

const scrape = async () => {
   console.log('scraping...');
   const data = await readData('./links.json');

   const URL = data[0];

   const browser = await puppeteer.launch();
   const page = await browser.newPage();

   await page.goto(baseURL, { waitUntil: 'domcontentloaded' });





   const res = await page.$$eval('div.picture a', (elements) => elements.map((e) => {
      return {
         link: e.href,
         img: e.querySelector<HTMLImageElement>('img')?.src || '',
      };
   }));

   console.log(res);

   // fs.writeFileSync(filePath, JSON.stringify(res));

   await browser.close();
};

const readData = async (path: string): Promise<string[]> => {
   try {
      const data = await fs.readFile(path, { encoding: 'utf8' });
      return JSON.parse(data);
   } catch (error) {
      console.error(error);
      throw new Error('Error reading file');
   }
};

scrape();
// readData('./links.json');