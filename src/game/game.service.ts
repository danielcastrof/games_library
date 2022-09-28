/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService){}
  async create(createGameDto: CreateGameDto) {
    const data = {
      ...createGameDto,
    }
    const created = await this.prisma.game.create({
      data,
    })
    return created;
  }

  async findAll() {
    const finds = await this.prisma.game.findMany();
    
    return finds;
  }
  
  async findOne(id: number) {
    const finds = await this.prisma.game.findUnique({where: {id}});

    return finds;
  }

  async findByTitle(title: string) {
    const finds = await this.prisma.game.findUnique({where: {title}});

    return finds;
  }

  async update(id: number, updateGameDto: UpdateGameDto) {
    const game = await this.findOne(id);

    const attGame = await this.prisma.game.update({
      where: {id: game.id},
      data: {...updateGameDto, id: game.id}
    })
    return attGame;
  }

  async remove(id: number) {
    const game = await this.findOne(id);
    await this.prisma.game.delete({where: {id: game.id}});
    return `O jogo ${game.title} foi deletado com sucesso!`;
  }
}
