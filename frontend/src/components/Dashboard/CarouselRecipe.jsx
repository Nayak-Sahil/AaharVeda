import React from "react";
import {
  TrendingUp,
  ShoppingCart,
  Utensils,
  ExternalLink,
  Leaf,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
export default function CarouselRecipe({ recipeList }) {

  // const [RecipeData, setRecipe] = useState({
  //   title: loadedRecipe.label,
  //   img: loadedRecipe.image,
  //   source: loadedRecipe.source,
  //   sourceLink: loadedRecipe.url,
  //   nutrients: loadedRecipe.totalNutrients,
  //   cuisine: loadedRecipe.cuisineType,
  //   mealType:loadedRecipe.mealType,
  //   dishType: loadedRecipe.dishType,
  //   ingredientsList: loadedRecipe.ingredients,
  //   dietLabels: loadedRecipe.dietLabels,
  //   healthLabels: loadedRecipe.healthLabels,
  //   cautions: loadedRecipe.cautions,
  //   yeild: loadedRecipe.yield,
  //   totalTime: loadedRecipe.totalTime,
  //   totalWeight: loadedRecipe.totalWeight
  // });
  console.error(recipeList)
  return (
    recipeList && <Carousel className="w-full mx-auto max-w-xs">
      <CarouselContent>
        {Array.from(recipeList).map((recipes, index) => (
          <CarouselItem key={index}>
            <div>
              <Card className="border-0">
                <CardContent className="flex flex-col aspect-square items-center justify-center p-2">
                  <img
                    className="rounded-full shadow-md"
                    src={recipes.recipe.images.THUMBNAIL.url}
                    alt={recipes.recipe.label}
                  />
                  <span className="text-sm mt-3 font-semibold">
                    {recipes.recipe.label}
                  </span>
                  <p className="w-full mt-3 flex justify-between">
                    <Badge variant="secondary" className="text-[10px] py-1">
                      <Utensils className="w-3 h-3 mr-1" /> {recipes.recipe.mealType}
                    </Badge>
                    <Badge variant="secondary" className="text-[10px] py-1">
                      <ShoppingCart className="w-3 h-3 mr-1" /> {recipes.recipe.ingredients.length} Ingredients
                    </Badge>
                  </p>
                  <a
                    className="text-sm mt-5 text-muted-foreground text-primary flex item-center hover:underline"
                    href="#"
                  >
                    Know More
                    <ExternalLink className="w-[14px] h-[14px] ml-1" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-2" />
      <CarouselNext className="-right-2" />
    </Carousel>
  );
}
