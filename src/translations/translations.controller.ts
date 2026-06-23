import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { TranslationsService } from './translations.service';
import { AuthGuard } from 'src/users/auth/auth.guard';
import { CreateTranslationDto } from './dto/create-translation.dto';
import { UpdateTranslationDto } from './dto/update-translation.dto';

@Controller('api/translations')
export class TranslationsController {
  constructor(private readonly translationsService: TranslationsService) { }

  // PUBLIC: every translation for a language as a flat { codename: text } map.
  @Get('lang')
  getLang(
    @Query('lang') lang: string
  ) {
    return this.translationsService.getLang(lang)
  }

  @Get()
  @UseGuards(AuthGuard)
  getAll() {
    return this.translationsService.getAll()
  }

  @Post()
  @UseGuards(AuthGuard)
  create(
    @Body() body: CreateTranslationDto
  ) {
    return this.translationsService.create(body)
  }

  @Get(':lang/:key')
  @UseGuards(AuthGuard)
  getOne(
    @Param('lang') lang: string,
    @Param('key') key: string
  ) {
    return this.translationsService.getOne(lang, key)
  }

  @Put(':lang/:key')
  @UseGuards(AuthGuard)
  update(
    @Param('lang') lang: string,
    @Param('key') key: string,
    @Body() body: UpdateTranslationDto
  ) {
    return this.translationsService.update(lang, key, body)
  }

  @Delete(':lang/:key')
  @UseGuards(AuthGuard)
  remove(
    @Param('lang') lang: string,
    @Param('key') key: string
  ) {
    return this.translationsService.remove(lang, key)
  }
}
