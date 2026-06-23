import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/other/prisma/prisma.service';
import { CreateTranslationDto } from './dto/create-translation.dto';
import { UpdateTranslationDto } from './dto/update-translation.dto';

@Injectable()
export class TranslationsService {
    constructor(
        private readonly prisma: PrismaService,
    ) { }

    async getAll() {
        return await this.prisma.translations.findMany()
    }

    async getLang(lang: string): Promise<Record<string, string>> {
        if (!lang)
            throw new BadRequestException("A 'lang' query parameter is required!")

        const rows = await this.prisma.translations.findMany({
            where: { lang_key: lang }
        })

        return rows.reduce<Record<string, string>>((acc, row) => {
            acc[row.text_key] = row.text
            return acc
        }, {})
    }

    async getOne(lang: string, key: string) {
        const row = await this.prisma.translations.findUnique({
            where: { lang_key_text_key: { lang_key: lang, text_key: key } }
        })

        if (!row)
            throw new NotFoundException("Translation not found!")

        return row
    }

    async create(body: CreateTranslationDto) {
        const already = await this.prisma.translations.findUnique({
            where: { lang_key_text_key: { lang_key: body.lang_key, text_key: body.text_key } }
        })

        if (already)
            throw new ConflictException("A translation with this language and codename already exist!")

        return await this.prisma.translations.create({
            data: body
        })
    }

    async update(lang: string, key: string, body: UpdateTranslationDto) {
        await this.getOne(lang, key)

        return await this.prisma.translations.update({
            where: { lang_key_text_key: { lang_key: lang, text_key: key } },
            data: body
        })
    }

    async remove(lang: string, key: string) {
        await this.getOne(lang, key)

        return await this.prisma.translations.delete({
            where: { lang_key_text_key: { lang_key: lang, text_key: key } }
        })
    }
}
