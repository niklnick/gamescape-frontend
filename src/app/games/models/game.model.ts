import { Category } from "../../categories/models/category.model";
import { Material } from "../../materials/models/material.model";

export interface Game {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly categories: Category[];
    readonly materials: Material[];
    readonly base?: Game;
    readonly variations: Game[];
}
