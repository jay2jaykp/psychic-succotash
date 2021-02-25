import {
  AnimalPuzzle1,
  AnimalPuzzle2,
  AnimalPuzzle3,
  FruitPuzzle1,
  FruitPuzzle2,
  FruitPuzzle3,
  FruitPuzzle4,
} from "../data/pictures";

export type articles = {
  id: number;
  name: string;
  brand: string;
  category: string[];
  link: string;
  picturesPath: any[];
};

export const articleData: articles[] = [
  {
    id: 1,
    name: "Animal Wooden Jigsaw Puzzle for Kids - 26 pieces in 1 set of Puzzle",
    brand: "MR Enterprise",
    category: ["Puzzles", "Wooden", "Kids"],
    link: "https://popshop.in/toysuniverse/wXS",
    picturesPath: [
      { id: 1, url: AnimalPuzzle1 },
      { id: 2, url: AnimalPuzzle2 },
      { id: 3, url: AnimalPuzzle3 },
    ],
    // picturesPath: [AnimalPuzzle1, AnimalPuzzle2, AnimalPuzzle3],
  },
  {
    id: 2,
    name: "Fruit Wooden Jigsaw Puzzle for Kids - 26 pieces in 1 set of Puzzle",
    brand: "MR Enterprise",
    category: ["Puzzles", "Wooden", "Kids"],
    link: "https://popshop.in/toysuniverse/wXS",
    picturesPath: [
      { id: 1, url: FruitPuzzle1 },
      { id: 2, url: FruitPuzzle2 },
      { id: 3, url: FruitPuzzle3 },
      { id: 4, url: FruitPuzzle4 },
    ],
    // picturesPath: [FruitPuzzle4, FruitPuzzle3, FruitPuzzle2],
  },
];
