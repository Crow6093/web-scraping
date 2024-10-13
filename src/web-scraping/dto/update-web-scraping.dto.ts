import { PartialType } from '@nestjs/mapped-types';
import { CreateWebScrapingDto } from './create-web-scraping.dto';

export class UpdateWebScrapingDto extends PartialType(CreateWebScrapingDto) {}
