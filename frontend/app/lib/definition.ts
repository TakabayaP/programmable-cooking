export type Recipe = {
    id: number;
    title: string;
    description: string;
    image: Image;
    createdAt: string;
    updatedAt: string;
}

export type Image = {
    src: string;
    alt: string;
}

export type RecipeData = {
    id: string
    title: string
};