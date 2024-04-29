import React from "react";
import { RecipeView } from "@/app/ui/recipe-view";

export default function Recipe({ params }: { params: { id: string } }) {
    return (
        <div>
            <RecipeView />
            This is the recipe page for id: {params.id}
        </div>
    );
};
