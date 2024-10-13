import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WebScrapingService } from './web-scraping.service';
import { CreateWebScrapingDto } from './dto/create-web-scraping.dto';
import { UpdateWebScrapingDto } from './dto/update-web-scraping.dto';

@Controller('web-scraping')
export class WebScrapingController {
  constructor(private readonly webScrapingService: WebScrapingService) {}

  @Post()
  scraping(@Body() body) {
    return this.webScrapingService.Scraping(body.link);
  }


}
