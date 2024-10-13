import { Injectable } from '@nestjs/common';
import { CreateWebScrapingDto } from './dto/create-web-scraping.dto';
import { UpdateWebScrapingDto } from './dto/update-web-scraping.dto';
import { chromium } from 'playwright';

@Injectable()
export class WebScrapingService {

  async Scraping(link) {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
  
    console.log(link);
    
    // Navega a la URL especificada
    await page.goto(link);
  
    // Extrae los datos de la página
    const products = await page.$$eval('.s-card-container', (results) => 
      results.map((el) => {
        const title = el.querySelector('h2')?.innerText || null;
        const image = el.querySelector('img')?.getAttribute('src') || null;
        const price = (el.querySelector('.a-price .a-offscreen') as HTMLElement)?.innerText || null;
        const link = el.querySelector('.a-link-normal')?.getAttribute('href') || null;
  
        // Si el título no está presente, omitimos este elemento
        if (!title) return null;
  
        return { title, image, price, link };
      })
    );
  
    // Filtra cualquier `null` que haya sido devuelto (por falta de título)
    const filteredProducts = products.filter((product) => product !== null);
  
    // Cierra el navegador
    await browser.close();
  
    // Retorna los productos
    return filteredProducts;
  }

}
