//@ts-nocheck
"use client";

import React, { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import BlogPostCard from "@/components/blog-post-card-mvp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AllPosts() {
  const [BLOG_POSTS, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const GAMES = [
    {
      name: "Salve os Legumes, Ninja",
      description: "Leônidas Rocha e Eduardo Carvalho",
      image: "Eduardo-Leonidas.png",
      link: "/games/Eduardo-Leonidas/index.html",
    },
    {
      name: "As Aventuras do Ninja",
      description: "Matheus Tavares, Paulo Neto e Francisco Melo",
      image: "matheus-paulo-francisco.png",
      link: "/games/matheus-paulo-francisco/index.html",
    },
    {
      name: "Parkour Saudável",
      description:
        "Theo Gomes, Rafael Camargo, Nasser El Ghaoui, Guilherme Blanc e Matheus Santos",
      image: "theo-rafael-nasser-guilherme-matheus.png",
      link: "/games/theo-rafael-nasser-guilherme-matheus/index.html",
    },
    {
      name: "Princess Diet Run",
      description: "Ana Pozzani e Helena Deister",
      image: "princessDietRun.png",
      link: "/games/Ana-e-Helena/index.html",
    },
    {
      name: "Desafio da Noite Saudável",
      description: "Mariana Rodrigues, Ryan Carvalho e Rafael Rodrigues",
      image: "mariana-rian-rafael.png",
      link: "/games/mariana-rian-rafael/index.html",
    },
    {
      name: "Dino",
      description: "Guilherme Hideki e João Cruz",
      image: "guilherme-joao.png",
      link: "/games/guilherme-joao/index.html",
    },
    {
      name: "Lutadores Contra a Má Alimentação",
      description: "Oliver Sved e Eric Sved",
      image: "oliver-eric.png",
      link: "/games/oliver-eric/index.html",
    },
    {
      name: "Raposa",
      description: "Ismael Pontes e Luisa Passe",
      image: "ismael-luisa.png",
      link: "/games/ismael-luisa/index.html",
    },
    {
      name: "Doritão",
      description: "Felipe Baena e Enrico Simbalista",
      image: "felipe-enrico.png",
      link: "/games/felipe-enrico/index.html",
    },
    {
      name: "Poder das Mães",
      description: "Artur Reis, Daniel Ribeiro e Kayky Chaves",
      image: "artur-daniel-kayky.png",
      link: "/games/artur-daniel-kayky/index.html",
    },
    {
      name: "Salada Suprema",
      description:
        "Arthur Paiva, Daniel Seabra, Mikael Roessler, Pedro Cirne e Pedro Pereira",
      image: "segunda.png",
      link: "/games/segunda/index.html",
    },

    {
      name: "Frutas Ultimato",
      description:
        "Daniel Macedo, Miguel Nóbrega, Pedro Amaral, Thiago Labronici",
      image: "sexta.png",
      link: "/games/sexta/index.html",
    },

    {
      name: "Emagreça se puder",
      description: "Gabriel Carvalho, Ricardo Barbosa e Bernardo Morgado",
      image: "gabriel-ricardo-bernardo.png",
      link: "/games/gabriel-ricardo-bernardo/index.html",
    },
    {
      name: "Barriga Mortal",
      description: "Carlos Cardoso",
      image: "barrigaMortal.png",
      link: "/games/Carlos/index.html",
    },
    {
      name: "Combatendo a Má Digestão",
      description: "André Vitor",
      image: "andreVitor.png",
      link: "/games/andreVitor/index.html",
    },
    {
      name: "Sonho Saudável",
      description: "Enzo Alves e Thiago Lopes",
      image: "enzo-thiago.png",
      link: "/games/enzo-thiago/index.html",
    },
    {
      name: "Adventure in Copacabana",
      description:
        "Daniel Machado, João Ferreira, João Ferreira e Vitor Dantas",
      image: "daniel-joao-luis-vitor.png",
      link: "/games/daniel-joao-luis-vitor/index.html",
    },
    {
      name: "Mundo de Diversões Encantado",
      description: "Pietra Carvalho e Carol Barbosa",
      image: "pietra-carol.png",
      link: "/games/pietra-carol/index.html",
    },

    {
      name: "Equipe Ultimato",
      description:
        "Daniel Afonso, Gustavo Braga, Gustavo Santos e Alli Mohammad",
      image: "daniel-gustavoE-gustavoQ-alli.png",
      link: "/games/daniel-gustavoE-gustavoQ-alli/index.html",
    },
    {
      name: "A Importância da Educação",
      description: "Maria Eduarda e Thais Lopes",
      image: "thais-duda.png",
      link: "/games/thais-duda/index.html",
    },
    {
      name: "Educational",
      description: "Bernardo Miloni, Bernardo Azevedo e Douglas Ferrari",
      image: "bmiloni-bschimitt-douglas.png",
      link: "/games/bmiloni-bschimitt-douglas/index.html",
    },
    {
      name: "UpSchool!",
      description: "Fernando Filho e João Birnfeld",
      image: "fernando-joao.png",
      link: "/games/fernando-joao/index.html",
    },
    {
      name: "Lucky e Leon",
      description: "Theo Lima e Sávio Oliveira",
      image: "savio-theo.png",
      link: "/games/savio-theo/index.html",
    },
    {
      name: "Luan e João",
      description: "Luan Santos e João Passos",
      image: "luan-joao.png",
      link: "/games/luan-joao/index.html",
    },
    {
      name: "O Monstro da Preguiça",
      description: "Matheus Lopes",
      image: "matheus.png",
      link: "/games/matheus/index.html",
    },
  ];

  useEffect(() => {
    //scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 px-8" id="devlog">
      <div className="container mx-auto mb-12">
        <Typography variant="h3" color="blue-gray">
          Games
        </Typography>
      </div>
      {loading ? (
        <div className="flex justify-center">
          <FontAwesomeIcon
            size="5x"
            icon={faSpinner}
            className="spinner text-5xl	"
          />
        </div>
      ) : (
        <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {GAMES.map((props, idx) => (
            <BlogPostCard key={idx} props={props} cta="Check it out" />
          ))}
        </div>
      )}
    </section>
  );
}

export default AllPosts;
