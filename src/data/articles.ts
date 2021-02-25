import {
  AnimalPuzzle1,
  AnimalPuzzle2,
  AnimalPuzzle3,
  // FruitPuzzle1,
  // FruitPuzzle2,
  // FruitPuzzle3,
  // FruitPuzzle4,
} from "../data/pictures";

export type articles = {
  id: number;
  name: string;
  brand: string;
  category: string[];
  link: string;
  picturesPath: string[];
};

export const articleData: articles[] = [
  {
    id: 1,
    name: "Animal Wooden Jigsaw Puzzle for Kids - 26 pieces in 1 set of Puzzle",
    brand: "MR Enterprise",
    category: ["Puzzles", "Wooden", "Kids"],
    link: "https://popshop.in/toysuniverse/wXS",
    picturesPath: [AnimalPuzzle1, AnimalPuzzle2, AnimalPuzzle3],
  },
  {
    id: 2,
    name: "Fruit Wooden Jigsaw Puzzle for Kids - 26 pieces in 1 set of Puzzle",
    brand: "MR Enterprise",
    category: ["Puzzles", "Wooden", "Kids"],
    link: "https://popshop.in/toysuniverse/wXS",
    picturesPath: [""], //[FruitPuzzle4, FruitPuzzle3, FruitPuzzle2],
  },
];
