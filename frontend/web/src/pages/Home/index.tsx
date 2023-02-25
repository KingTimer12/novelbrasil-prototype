import { useEffect, useState } from "react";
import { Novel } from "../../App";
import Emphasis from "../../components/Emphasis";
import Navigation from "../../components/Navigation";
import Novels from "../../components/Novels";

const Home = () => {
  const [novels, setNovels] = useState<Novel[]>([]);
  const [dark, setDark] = useState(false)

  const genders = [
    "Ação",
    "Guerra",
    "Realístico",
    "Jogos",
    "Urbano",
    "Cultivo",
    "Terror",
    "Sci-Fi",
    "Fantasia",
    "Histórico",
    "Harém",
    "Mistério",
    "Romance",
  ];

  useEffect(() => {
    setNovels([
      {
        author: "Rose Kethen",
        coverUrl:
          "https://i1.wp.com/kiniga.com/wp-content/uploads/2020/10/New-Cover-Venante-2.jpg?fit=720%2C960&ssl=1",
        id: "285124269753503744",
        rating: 5,
        sinopse: `Mais de cem anos atrás, houve a explosão dos Portais, conectando nosso mundo pacífico a diversos outros mundos, forçando-nos a lutar contra as Anomalias, mesmo quando não estávamos unidos e ainda em caos.
  
        Porém, nos foi concedido o poder de contra-atacar. E havia aquelas pessoas que se jogavam aos Portais, sem medo, apenas pela sobrevivência da humanidade.
        
        Eles eram e ainda são Venantes, aqueles que se jogam no perigo e mostram que não somos apenas sobreviventes, mas caçadores. Se alguma Anomalia busca invadir nosso mundo, que esteja preparada para as consequências.`,
        title: "Venante",
        view: 2800000,
      },
      {
        author: "Alonso Allen",
        coverUrl:
          "https://i2.wp.com/kiniga.com/wp-content/uploads/2022/01/New-Cover-642.jpg?fit=720%2C960&ssl=1",
        id: "285124269753503799",
        rating: 5,
        sinopse: `No Reino da Magia, onde ter magia era tão comum quanto ter pelos na bunda, possuir capacidades mágicas era essencial! E nesse mundo, um jovem de quinze anos se preparava para fazer o exame de admissão na Academia Mágica de Magos do Reino da Magia. Seu nome era Renato, mas também era conhecido na vizinhança como… “Renato do fim da rua”. Acompanhe esta história, baseada em fatos reais, da jornada de Renato e seu mestre.`,
        title: "O Mago Bombado",
        view: 4000000,
      },
      {
        author: "RemCmps",
        coverUrl:
          "https://i1.wp.com/kiniga.com/wp-content/uploads/2021/03/New-Cover-Dahlia.jpg?fit=720%2C960&ssl=1",
        id: "285124269753503809",
        rating: 4.3,
        sinopse: `Em seus últimos momentos, uma garota recebeu ajuda de uma deusa que observa o mundo da Lua. Seu pedido foi atendido, mas em troca deveria completar uma missão em sua próxima vida.
  
        A garota destina a salvar ou destruir o mundo dos Deuses.
        
        Crescendo em um orfanato e escolhida como soldado, Zoe é uma garota extrovertida que está sempre pregando peças nas instrutoras. Porém, sua vida mudou completamente no seu aniversário de dez anos, quando recebeu as memórias de sua antiga vida.
        
        Obrigada a entrar em uma guerra entre seres divinos, recebeu uma única frase de um ser desconhecido: Mate o falso herói!`,
        title: "Dahlia: A Garota Lunar Reencarnada",
        view: 14200,
      },
    ]);
  }, []);

  document.documentElement.setAttribute("data-color-scheme", dark ? "dark" : "light")

  return (
    <div className={dark ? 'bg-[#1B1B1B] data' : 'bg-white'}>
      <Navigation genders={genders} dark={dark} />
      <Emphasis dark={dark} />

      <Novels dark={dark} title="Novidades" novels={novels} />
    </div>
  );
};

export default Home;
