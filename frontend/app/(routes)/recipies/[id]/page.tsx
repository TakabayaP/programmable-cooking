import React from "react";
import { RecipeView } from "@/app/ui/recipe-view";
import MDX, { meta } from "@/recipies/0.mdx";

export function generateStaticParams() {
    return [{ id: "0" }]
}

export default function Recipe({ params }: { params: { id: string } }) {
    const a=meta.updatedAt;
    return (
        <div>
            <RecipeView />
            {meta.title}
            This is the recipe page for id: {params.id}
            <MDX />
        </div>
    );
};
