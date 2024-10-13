import { Test, TestingModule } from '@nestjs/testing';
import { WebScrapingController } from './web-scraping.controller';
import { WebScrapingService } from './web-scraping.service';

describe('WebScrapingController', () => {
  let controller: WebScrapingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebScrapingController],
      providers: [WebScrapingService],
    }).compile();

    controller = module.get<WebScrapingController>(WebScrapingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
