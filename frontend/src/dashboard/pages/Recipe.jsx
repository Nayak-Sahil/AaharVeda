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
      <header className="w-full h-[10%] mb-3 flex justify-between items-center">
        <div>
          <h1 className="text-primary leading-7 font-semibold">
            {RecipeData.title}
          </h1>
          <p className="text-xs font-bold">Source: <a href={RecipeData.sourceLink} className="text-primetext">{RecipeData.source}</a></p>
        </div>
        <div className="w-max h-full flex items-center justify-center">
          <RecipeTypeCard
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
            typeIcon={<UtensilsCrossed className="text-primetext w-4 mr-4" />}
            typeKey="Dish Type"
            typeVal={RecipeData.dishType}
          />
        </div>
      </header>
      <main className="w-full h-[85%] flex justify-between items-center">
        <div className="w-[70%] h-full mr-7 border-gray-100 rounded-lg flex flex-col justify-between items-center">
          <div className="w-full h-[45%] flex justify-between items-center">
            <img width={200} src={RecipeData.img} alt={`Recipe: ${RecipeData.title}`} />
            <div className="w-[250px] h-full border flex flex-col justify-center border-gray-200 rounded-lg p-5">
              <p className="text-sm mb-2 truncate w-[95%] flex justify-between"><b className="text-primetext">Yeild:</b> <span className="text-primary font-semibold">{RecipeData.yeild} Item</span></p>
              <p className="text-sm mb-2 truncate w-[95%] flex justify-between"><b className="text-primetext">Total Time:</b> <span className="text-primary font-semibold">{RecipeData.totalTime} Min.</span> </p>
              <p className="text-sm mb-2 truncate w-[95%] flex justify-between"><b className="text-primetext">Total Ingredients:</b> <span className="text-primary font-semibold">{Array.from(RecipeData.ingredientsList).length} item</span> </p>
              <p className="text-sm mb-2 flex justify-between"><b className="text-primetext">Total Weight:</b> <span className="text-primary font-semibold truncate w-[45%]">{RecipeData.totalWeight} Weight</span> </p>
            </div>
            <div className="w-max h-full">
              <PieChart pieData={RecipeData.nutrients} wantAction={false} wrapperStyle="h-max flex flex-col items-center justify-evenly" pieStyle="w-48 h-48" />
            </div>
          </div>
          <div className="w-full h-[50%]">
            <header className="w-full h-max mb-3 text-sm flex justify-between items-center">
              <h1 className="font-semibold">All Ingredient</h1>
              <p><b>Total</b>: {Array.from(RecipeData.ingredientsList).length} Ingredients</p>
            </header>
            <main className="w-full h-[90%] overflow-y-auto grid grid-cols-3 auto-rows-auto gap-y-2">
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
        <div className="w-[30%] px-5 h-[450px] overflow-y-auto border border-gray-100 rounded-lg">
          <LabelsAccordion labelList={RecipeData.dietLabels} title="Diet Labels" />
          <LabelsAccordion labelList={RecipeData.healthLabels} title="Health Labels" />
          <LabelsAccordion labelList={RecipeData.cautions} title="Cautions" />
        </div>
      </main>
    </section> : "Nothing to show"
  );
}
