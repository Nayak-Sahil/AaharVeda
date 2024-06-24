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
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import ServiceCard from "@/components/Dashboard/ServiceCard";
import CarouselRecipe from "@/components/Dashboard/CarouselRecipe";

export default function Dashboard() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg text-primetext font-semibold md:text-base">
          Dashboard
        </h1>
      </div>

      <section className="flex flex-col md:flex-row w-full h-max items-center justify-between">
        {/* Trending Recipe */}
        <ServiceCard title="Trending Recipe" description="💖 Most Likely" icon={<TrendingUp className="h-5 w-5 text-muted-foreground" />} content={<CarouselRecipe />}/>

        {/* Daily Nutrients Section */}
        <div className="w-72 mt-3 md:mt-0 h-full">
          <Card className="sm:col-span-2 h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm tracking-wide font-medium text-primary">
                Daily Nutrients
                <p className="text-[10px] text-primetext">
                  🥑 Your Daily Nutrients Intake
                </p>
              </CardTitle>
              <Leaf className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center mt-2">
              <div className="w-48 h-48">
                <Doughnut
                  // options = {data}
                  data={{
                    labels: ["Fat", "Protein", "Carbs"],
                    datasets: [
                      {
                        label: "Nutrients",
                        data: [300, 50, 100],
                        backgroundColor: ["#ff8f92", "#ffe773", "#0da7d5c7"],
                        borderColor: ["#ff5a5f", "#ffd817", "#0da7d5"],
                        hoverOffset: 4,
                      },
                    ],
                  }}
                  // {...props}
                />
              </div>
              <a
                variant="outline"
                className="text-sm relative -bottom-4 text-muted-foreground text-primary flex item-center p-0"
              >
                Set Intake <ExternalLink className="w-[14px] h-[14px] ml-1" />
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Today Recipe */}
        <ServiceCard title="Today Recipe" description="🥣 Your Daily Recipe Plan" icon={<Calendar className="h-5 w-5 text-muted-foreground" />} content={<CarouselRecipe />}/>
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
            <Button variant="outline">Explore Nutrients</Button>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
