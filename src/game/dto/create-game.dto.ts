/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsString } from "class-validator";

export class CreateGameDto {
  id?: number;

  @ApiProperty({ example: 'The Last of Us', description: 'Título do jogo' })
  @IsString()
  title: string;
  
  
  @IsString()
  @ApiProperty({ example: 'https://www.freetogame.com/g/517/thumbnail.jpg', description: 'Imagem do jogo' })
  thumbnail: string;
  
  @IsString()
  @ApiProperty({ example: 'Jogo Multiplayer', description: 'Descrição do jogo' })
  short_description: string;
  
  @IsString()
  @ApiProperty({ example: 'https://www.freetogame.com/open/lost-ark', description: 'URL do jogo' })
  game_url: string;
  
  @IsString()
  @ApiProperty({ example: 'Ação', description: 'Gênero do jogo' })
  genre: string;
  
  @IsString()
  @ApiProperty({ example: 'PC', description: 'Plataforma do jogo' })
  platform: string;
  
  @IsString()
  @ApiProperty({ example: 'Amazon Games', description: 'Fornecedora do jogo' })
  publisher: string;
  
  @IsString()
  @ApiProperty({ example: 'Smilegate RPG', description: 'Desenvolvedora do jogo' })
  developer: string;
  
  @IsDateString("yyyy-MM-dd")
  @ApiProperty({ example: '2022-01-30', description: 'Data de Lançamento' })
  release_date: string;
  
  @IsString()
  @ApiProperty({ example: 'https://www.freetogame.com/lost-ark', description: 'Link para acesso ao jogo' })
  freetogame_profile_url: string;
}
