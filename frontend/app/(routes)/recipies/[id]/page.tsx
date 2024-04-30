import { readFileSync } from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import type { RecipeData } from "@/app/lib/definition";
import { RecipeView } from "@/app/ui/recipe-view";

export function generateStaticParams() {
	return [{ id: "0" }];
}

export default async function Recipe({ params }: { params: { id: string } }) {
	const { data, content } = matter(
		readFileSync(`recipies/${params.id}.mdx`, "utf-8"),
	);
	const markdown = await serialize(content);
	return (
		<div>
			<RecipeView markdown={markdown} recipeData={data as RecipeData} />
		</div>
	);
}
