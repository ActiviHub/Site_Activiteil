import ArticleDauphine from "../Elements/Articles/ArticleDauphine";
import ArticleFrance3 from "../Elements/Articles/ArticleFrance3";
import ArticleFranceBleu from "../Elements/Articles/ArticleFranceBleu";
import ArticleTribune from "../Elements/Articles/ArticleTribune";
import Video from "../Video";

const mediasDatas = [
  {
    id: 5,
    media: <ArticleTribune />,
    title: "La Tribune",
    text: "a publié un article consacré à Activiteil dans son Hebdomadaire",
    subText: "Jeudi 28 juillet 2022",
  },
  {
    id: 4,
    media: <Video />,
    title: "France 3",
    text: "a publié un reportage dédié à notre Journée Portes Ouvertes lors de son JT le 19/20",
    subText: "27 juin 2022",
  },
  {
    id: 3,
    media: <ArticleFrance3 />,
    title: "France 3",
    text: "a publié un article dédié à notre Journée Portes Ouvertes sur Internet",
    subText: "31 mai 2022",
  },
  {
    id: 2,
    media: <ArticleDauphine />,
    title: "Le Dauphiné",
    text: "a publié un article pour l'ouverture d'Activiteil dans son quotidien et sur Internet",
    subText: "04 avril 2022",
  },
  {
    id: 1,
    media: <ArticleFranceBleu />,
    title: "France Bleu",
    text: "a publié un article dédié au projet Activiteil sur Internet",
    subText: "30 décembre 2021",
  },
];

export default mediasDatas;
