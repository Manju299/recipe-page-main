import Omelette from "../assets/image-omelette.jpeg";
import "../App.css";

function Home() {
  return (
    <>
      <main>
        <div className="container">
          <img src={Omelette} />
          <div>
            <h1>Simple Omelette Recipe</h1>
            <p>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>

          <div className="sub-container">
            <h3>Preparation time</h3>
            <ul>
              <li>
                <span>Total:</span> Approximately 10 minutes
              </li>
              <li>
                <span>Preparation:</span> 5 minutes
              </li>
              <li>
                <span>Cooking:</span> 5 minutes
              </li>
            </ul>
          </div>

          <div>
            <h2>Ingredients</h2>
            <ul className="ingri">
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
            <div className="line"></div>
          </div>

          <div>
            <h2>Instructions</h2>
            <ol>
              <li>
                <span>Beat the eggs:</span> In a bowl, beat the eggs with a
                pinch of salt and pepper until they are well mixed. You can add
                a tablespoon of water or milk for a fluffier texture.
              </li>
              <li>
                <span>Heat the pan:</span> Place a non-stick frying pan over
                medium heat and add butter or oil.
              </li>
              <li>
                <span>Cook the omelette:</span> Once the butter is melted and
                bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </li>
              <li>
                <span>Add fillings (optional):</span> When the eggs begin to set
                at the edges but are still slightly runny in the middle,
                sprinkle your chosen fillings over one half of the omelette.
              </li>
              <li>
                <span>Fold and serve:</span> As the omelette continues to cook,
                carefully lift one edge and fold it over the fillings. Let it
                cook for another minute, then slide it onto a plate.
              </li>
              <li>
                <span>Enjoy:</span> Serve hot, with additional salt and pepper
                if needed.
              </li>
            </ol>

            <div className="line"></div>
          </div>
          <div>
            <h2>Nutrition</h2>
            <p>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <div className="table">
              <div className="data">
                <div>Calories</div>
                <div>277kcal</div>
              </div>

              <div className="data">
                <div>Carbs</div>
                <div>0g</div>
              </div>

              <div className="data">
                <div>Protein</div>
                <div>20g</div>
              </div>

              <div className="data">
                <div>Fat</div>
                <div>22g</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
