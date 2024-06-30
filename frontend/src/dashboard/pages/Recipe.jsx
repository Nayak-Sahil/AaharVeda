import RecipeTypeCard from "@/components/Recipe/RecipeTypeCard";
import IngredientCard from "@/components/Recipe/IngredientCard";
import { CookingPot, Salad, Utensils, UtensilsCrossed } from "lucide-react";
import React, { useEffect, useState } from "react";
import LabelsAccordion from "@/components/Recipe/LabelsAccordion";
import PieChart from "@/components/Dashboard/PieChart";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "@/components/Dashboard/ServiceCard";
import { Description } from "@radix-ui/react-dialog";

export default function Recipe(props) {
  const loadedData = useLoaderData();
  const isEmpty = (loadedData.hits == undefined || loadedData.hits.length == 0) ? true : false;
 
  const [RecipeData, setRecipe] = useState();
  useEffect(()=>{
    if(!isEmpty){
      const loadedRecipe = loadedData.hits[0].recipe;
      setRecipe({
        title: loadedRecipe.label,
        img: loadedRecipe.image,
        source: loadedRecipe.source,
        sourceLink: loadedRecipe.url,
        nutrients: loadedRecipe.totalNutrients,
        cuisine: loadedRecipe.cuisineType,
        mealType:loadedRecipe.mealType,
        dishType: loadedRecipe.dishType,
        ingredientsList: loadedRecipe.ingredients,
        dietLabels: loadedRecipe.dietLabels,
        healthLabels: loadedRecipe.healthLabels,
        cautions: loadedRecipe.cautions,
        yeild: loadedRecipe.yield,
        totalTime: loadedRecipe.totalTime,
        totalWeight: loadedRecipe.totalWeight
      })
    }
  }, [])

  console.log(RecipeData)

  return (
    !isEmpty && RecipeData ? <section className="w-full h-full flex flex-col justify-between">
      <header className="w-full sm:h-[10%] h-max mb-3 flex flex-wrap justify-between items-center">
        <div className="">
          <h1 className="text-primary leading-7 font-semibold">
            {RecipeData.title}
          </h1>
          <p className="text-xs font-bold">Source: <a href={RecipeData.sourceLink} className="text-primetext">{RecipeData.source}</a></p>
        </div>
        <div className="sm:w-max w-full sm:h-full mt-5 sm:mt-0 h-max flex flex-wrap items-center justify-center">
          <RecipeTypeCard
            customCss="ml-1"
            typeIcon={<Salad className="text-primetext w-4 mr-4" />}
            typeKey="Cuisine"
            typeVal={RecipeData.cuisine}
          />
          <RecipeTypeCard
            typeIcon={<CookingPot className="text-primetext w-4 mr-4" />}
            typeKey="Meal Type"
            typeVal={RecipeData.mealType}
          />
          <RecipeTypeCard
            customCss="sm:mt-0 mt-3"
            typeIcon={<UtensilsCrossed className="text-primetext w-4 mr-4" />}
            typeKey="Dish Type"
            typeVal={RecipeData.dishType}
          />
        </div>
      </header>
      <main className="w-full sm:h-[85%] h-max flex flex-wrap justify-between items-center">
        <div className="sm:w-[70%] w-full sm:h-full h-max sm:mr-7 border-gray-100 rounded-lg flex flex-col justify-between items-center">
          <div className="w-full sm:h-[45%] h-max flex sm:flex-row flex-col flex-wrap justify-center sm:justify-between items-center">
            <img className="sm:mb-0 mb-5" width={200} src={RecipeData.img} alt={`Recipe: ${RecipeData.title}`} />
            <div className="w-[250px] h-full sm:mb-0 mb-5 border flex flex-col justify-center border-gray-200 rounded-lg p-5">
              <p className="text-sm mb-2 truncate w-[95%] flex justify-between"><b className="text-primetext">Yeild:</b> <span className="text-primary font-semibold">{RecipeData.yeild} Item</span></p>
              <p className="text-sm mb-2 truncate w-[95%] flex justify-between"><b className="text-primetext">Total Time:</b> <span className="text-primary font-semibold">{RecipeData.totalTime} Min.</span> </p>
              <p className="text-sm mb-2 truncate w-[95%] flex justify-between"><b className="text-primetext">Total Ingredients:</b> <span className="text-primary font-semibold">{Array.from(RecipeData.ingredientsList).length} item</span> </p>
              <p className="text-sm mb-2 flex justify-between"><b className="text-primetext">Total Weight:</b> <span className="text-primary font-semibold truncate w-[45%]">{RecipeData.totalWeight} Weight</span> </p>
            </div>
            <div className="w-max sm:h-full h-max sm:mb-0 mb-5">
              <PieChart pieData={RecipeData.nutrients} wantAction={false} wrapperStyle="h-max flex flex-col items-center justify-evenly" pieStyle="w-48 h-48" />
            </div>
          </div>
          <div className="w-full sm:h-[50%] sm:mt-0 mt-5 h-max">
            <header className="w-full h-max mb-3 text-sm flex flex-wrap justify-between items-center">
              <h1 className="font-semibold">All Ingredient</h1>
              <p><b>Total</b>: {Array.from(RecipeData.ingredientsList).length} Ingredients</p>
            </header>
            <main className="w-full sm:h-[70%] h-max overflow-y-auto grid-cols-1 grid sm:grid-cols-3 auto-rows-auto gap-y-2 justify-items-center">
              {
                Array.from(RecipeData.ingredientsList).map((item)=>{
                  return(
                    <IngredientCard itemImg={item.image} itemName={item.text} itemType={item.food} itemQty={item.quantity + " " + item.measure} />
                  )
                })
              }
            </main>
          </div>
        </div>
        <div className="sm:w-[25%] sm:mt-0 mt-5 w-full px-5 sm:h-[450px] h-max overflow-y-auto border border-gray-100 rounded-lg">
          <LabelsAccordion labelList={RecipeData.dietLabels} title="Diet Labels" />
          <LabelsAccordion labelList={RecipeData.healthLabels} title="Health Labels" />
          <LabelsAccordion labelList={RecipeData.cautions} title="Cautions" />
        </div>
      </main>
    </section> : "Nothing to show"
  );
}
