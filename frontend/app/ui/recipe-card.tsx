export function RecipeCard() {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="/600x400.png" alt="Fried rice" /></figure>
            <div className="card-body">
                <h2 className="card-title">炒飯</h2>
                <p>基本のチャーハンの作り方を丁寧に解説します</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">レシピを見る</button>
                </div>
            </div>
        </div>
    );
}