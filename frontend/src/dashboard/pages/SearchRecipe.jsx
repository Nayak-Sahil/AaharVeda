import React, { useState } from "react";
import cookingRecipe from "../../assets/illustration/cookingRecipe.png";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export default function SearchRecipe() {

  const [recipeName, setRecipe] = useState("");

  return (
    <section className="w-full">
      <h1>Here you go, Discover Your Dish 🥣.</h1>
      <div className="w-full h-full py-5 flex flex-wrap items-center justify-center sm:justify-between">
        <div className="w-full sm:w-[50%]">
          <h1 className="text-primary leading-10 font-semibold">Discover Detailed Recipes for any Dish</h1>
          <p className="text-sm text-justify text-primetext leading-6">Enter any dish you've enjoyed, like <b>"Paneer Tikka"</b>. Our database has <b>precise details of foods</b>, including a wide information of <b>international cuisines</b>.</p>
          <div className="relative my-5">
            <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              value={recipeName}
              onChange={(e)=>{setRecipe(e.target.value)}}
              placeholder="Type one or more keywords"
              className="w-full appearance-none bg-background pl-8 shadow-none"
            />
          </div>
          <Link to={`../services/recipe/${recipeName}`} className="px-5 py-2 text-sm font-medium rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground">Discover</Link>
        </div>
        <img className="w-52 sm:w-80" src={cookingRecipe} alt="Cooking Recipe" width={300} />
      </div>
    </section>
  );
}
