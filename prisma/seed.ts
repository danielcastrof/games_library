/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';
import { getDados } from './games';
const prisma = new PrismaClient();

async function main() {
const dad = await getDados();
const dados = dad.data;
    for(const dado of dados){
    const game = await prisma.game.create({
        data: {
            title: dado.title,
            thumbnail: dado.thumbnail,
            short_description: dado.short_description,
            game_url: dado.game_url,
            genre: dado.genre,
            platform: dado.platform,
            publisher: dado.publisher,
            developer: dado.developer,
            release_date: dado.release_date,
            freetogame_profile_url: dado.freetogame_profile_url
        }
    });
}
}

main().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(() => {
    prisma.$disconnect();
})