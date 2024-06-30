import React, { useState } from "react";
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
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import ServiceCard from "@/components/Dashboard/ServiceCard";
import CarouselRecipe from "@/components/Dashboard/CarouselRecipe";
import PieChart from "@/components/Dashboard/PieChart";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {

  const [RecipeList, setRecipeList] = useState([]);
  useEffect(()=>{
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=paneer&app_id=${import.meta.env.VITE_API_APP_ID}&app_key=${import.meta.env.VITE_API_APP_KEY}`).then((data)=> data.json()).then((recipes)=>{
      setRecipeList(Array.from(recipes.hits));
      console.warn(recipes);
    });
  }, [])

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg text-primetext font-semibold md:text-base">
          Dashboard
        </h1>
      </div>

      <section className="flex flex-col md:flex-row w-full h-max items-center justify-between">
        {/* Trending Recipe */}
        <ServiceCard title="Trending Recipe" description="💖 Most Likely" icon={<TrendingUp className="h-5 w-5 text-muted-foreground" />} content={<CarouselRecipe recipeList={RecipeList} />}/>

        {/* Daily Nutrients Section */}
        <ServiceCard title="Daily Nutrients" description="🥑 Your Daily Nutrients Intake" icon={<Leaf className="h-5 w-5 text-muted-foreground" />} content={<PieChart wrapperStyle="h-60 flex flex-col items-center justify-evenly" pieStyle="w-48 h-48" wantAction={true} />} cardContentStyle="px-0 py-0 flex flex-col justify-center items-center pb-4" />
    
        {/* Today Recipe */}
        <ServiceCard title="Today Recipe" description="🥣 Your Daily Recipe Plan" icon={<Calendar className="h-5 w-5 text-muted-foreground" />} content={<CarouselRecipe recipeList={RecipeList.slice(6, 9)} />}/>
      </section>

      <section>
        <Card className="w-full sm:col-span-2 bg-veg-abstraction bg-no-repeat bg-contain bg-right">
          <CardHeader className="pb-3 flex">
            <CardTitle className="text-base text-primary tracking-wide">
              Discover Nutrients
            </CardTitle>
            <CardDescription className="text-primetext">
              Discover comprehensive <b>nutrient details</b> for every
              ingredient in your daily meals 🥣.
              {/* Discover recipes complete with detailed <b>nutritional information and ingredient lists</b>.  */}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Link to="./search-recipe" className={`text-xs w-max h-max p-2 px-5 rounded-md bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 tracking-wide`}>Explore Nutrients</Link>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
