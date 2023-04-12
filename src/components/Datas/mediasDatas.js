import React from "react";
import ArticleDauphine202210 from "../Elements/Articles/ArticleDauphine202210";
import ArticleDauphine202204 from "../Elements/Articles/ArticleDauphine202204";
import ArticleFrance3 from "../Elements/Articles/ArticleFrance3";
import ArticleFranceBleu2022 from "../Elements/Articles/ArticleFranceBleu2022";
import ArticleFranceBleu2021 from "../Elements/Articles/ArticleFranceBleu2021";
import ArticleTribune from "../Elements/Articles/ArticleTribune";
import Video from "../Video";
import ArticleBanqueDesTerritoires202303 from "../Elements/Articles/ArticleBanqueDesTerritoires202303";

const mediasDatas = [
  {
    id: 0,
    media: <ArticleBanqueDesTerritoires202303 />,
    title: "Banque des Territoires",
    text: "à propos de nos activités non concurentielles",
    what: "article",
    where: "Internet",
    day: "02",
    month: "mars",
    year: "2023",
  },
  {
    id: 1,
    media: <ArticleDauphine202210 />,
    title: "Le Dauphiné",
    text: "à propos des activités d'Activiteil",
    what: "article",
    where: "Internet",
    day: "26",
    month: "octobre",
    year: "2022",
  },
  {
    id: 2,
    media: <ArticleFranceBleu2022 />,
    title: "France Bleu",
    text: "consacré à Activiteil",
    what: "Hebdomadaire",
    where: "Internet",
    day: "10",
    month: "octobre",
    year: "2022",
  },
  {
    id: 3,
    media: <ArticleTribune />,
    title: "La Tribune",
    text: "consacré à Activiteil",
    what: "article",
    where: "Hebdomadaire",
    day: "28",
    month: "juillet",
    year: "2022",
  },
  {
    id: 4,
    media: <Video />,
    title: "France 3",
    text: "dédié à notre Journée Portes Ouvertes",
    what: "reportage",
    where: "JT le 19/20 sur Internet",
    day: "27",
    month: "juin",
    year: "2022",
  },
  {
    id: 5,
    media: <ArticleFrance3 />,
    title: "France 3",
    text: "dédié à notre Journée Portes Ouvertes",
    what: "article",
    where: "Internet",
    day: "31",
    month: "mai",
    year: "2022",
  },
  {
    id: 6,
    media: <ArticleDauphine202204 />,
    title: "Le Dauphiné",
    text: "pour l'ouverture d'Activiteil",
    what: "article",
    where: "Quotidien et Internet",
    day: "04",
    month: "avril",
    year: "2022",
  },
  {
    id: 7,
    media: <ArticleFranceBleu2021 />,
    title: "France Bleu",
    text: "dédié au projet Activiteil",
    what: "article",
    where: "Internet",
    day: "30",
    month: "décembre",
    year: "2021",
  },
];

export default mediasDatas;
