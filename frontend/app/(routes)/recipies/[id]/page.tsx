import { readFileSync } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { RecipeView } from "@/app/ui/recipe-view";

export function generateStaticParams() {
    return [{ id: "0" }]
}

export default async function Recipe({ params }: { params: { id: string } }) {
    const markdown = await serialize(readFileSync(`recipies/${params.id}.mdx`, "utf-8"));
    return (
        <div>
            <RecipeView markdown={markdown} />
            This is the recipe page for id: {params.id}
        </div>
    );
};
