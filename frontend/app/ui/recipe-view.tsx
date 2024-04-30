"use client";
import React, { useState } from "react";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import type { RecipeData } from "@/app/lib/definition";
import {
	faCaretLeft,
	faCaretRight,
	faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDXContent } from "./mdx-content";

interface RecipeViewProps {
	markdown: MDXRemoteSerializeResult;
	recipeData: RecipeData;
}

export function RecipeView({ markdown, recipeData }: RecipeViewProps) {
	const [servings, setServings] = useState<number>(1);
	return (
		<div>
			<div className="md:grid md:grid-cols-2 md:gap-8 mb-8">
				<img
					src="/fried_rice.jpg"
					width={3024}
					height={4032}
					alt="Screenshots of the dashboard project showing desktop version"
					className="mb-8 md:mb-0"
				/>
				<div className="grid grid-cols-1 gap-4">
					<div>
						<h1 className="text-4xl font-bold mb-4 border-b-2">
							{recipeData.title}
						</h1>
						<p>
							基本のチャーハンは、シンプルで美味しい炒飯のレシピです。ご飯と具材を炒めて、醤油や塩で味付けしましょう。簡単に作れるので、忙しい日のランチやディナーにぴったりです。
						</p>
					</div>
					<div>
						<FontAwesomeIcon icon={faClock} className="inline w-4  mr-2" />
						調理時間: 20分
					</div>
				</div>
			</div>
			<h2 className="text-2xl font-bold mb-4 border-b-2">材料</h2>
			<button
				className="btn btn-ghost"
				onClick={() => {
					if (servings - 1 > 0) setServings(servings - 1);
				}}
				type="button"
			>
				<FontAwesomeIcon icon={faCaretLeft} />
			</button>
			{servings}
			<button
				className="btn btn-ghost"
				onClick={() => setServings(servings + 1)}
				type="button"
			>
				<FontAwesomeIcon icon={faCaretRight} />
			</button>
			人前
			<ul>
				<li>ご飯: {1 * servings}合</li>
				<li>玉ねぎ: {0.5 * servings}個</li>
				<li>にんじん: {0.5 * servings}本</li>
				<li>卵: {1 * servings}個</li>
				<li>鶏もも肉: {50 * servings}g</li>
				<li>塩: 小さじ{0.5 * servings}</li>
				<li>こしょう: 少々</li>
				<li>醤油: 大さじ{servings}</li>
				<li>サラダ油: 大さじ{servings}</li>
			</ul>
			<h2 className="text-2xl font-bold mb-4 border-b-2">作り方</h2>
			<MDXContent source={markdown} data={{ servings: servings }} />
		</div>
	);
}
