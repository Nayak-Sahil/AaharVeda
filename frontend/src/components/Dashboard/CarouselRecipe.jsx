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
export default function CarouselRecipe() {
  return (
    <Carousel className="w-full mx-auto max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div>
              <Card className="border-0">
                <CardContent className="flex flex-col aspect-square items-center justify-center p-2">
                  <img
                    className="rounded-full shadow-md"
                    src="https://edamam-product-images.s3.amazonaws.com/web-img/50b/50b1b42b19b2037118c82e10c4b14acb-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLWVhc3QtMSJGMEQCIFdFPNA5jpLl0AWh5AcBYfxq90Uc38f0gtCOvwXF3bILAiAAlpUkG3rpnSYWzbQ9L%2BP6FnaIDYOFWToHsuHVy3F9IyrBBQiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMjEUaRM1C3%2FDYhATDKpUFdXHngAse9bvyo5ww6GWwU9j00ftnsfdYDb2F01yKGMpuQAaTaHyXziYAHDATyrGVax8evfWbTMaVBxodMeAgcEB5ALd%2BVcCBb4risVg07trxSnLSToXVKk6NQpRewooLzGvE0H4FZJlsgm65q9FOAXubGOAQZ8ud8W9cv8ME5WLtRVZdfq0KXMSEmqPo88CgzuWN%2FdgXJLqtiegRv2KY%2B0BK7edOz%2FzWctOUoywKw%2BJSrImVAlCppc%2F6bZqsj4Kc761V37zRPrOQHZsQ0Xne7Owid%2F7p%2FnCoLnbEIj99omc%2BNxCh%2BRGdbLitZIzsE9ZVVZRWaC3Wwkv%2F1UeSpiKKGqo6VXbONsgsPWlnA1lxsIZUGhn6oWFQ7ZxOnYDfua3iFaP%2FBPPHnCjOCpcFV3E5FtipCyLYeRdMp0hCwTbAw9dMyjdUMR6cCidyC05BlwXNLmLmV3NLzKJRDFwwTyljTGeS56kqQpl%2FHo9KbbGAmfVaQ2v%2FSXlxzBUfoY3o75qCKUEpTHbDv%2BVg9Y0QhHpfdHmXTuoNt6UA36udb7OkT6xFspcXW2N2Smq4IOxoub1bm7rDh6ArC2vQxeTPLdQKOfjsowldqjMacgT%2Btr8NvslunqrcpbU%2BmqPVDlhI%2FzA%2BLoLIBh%2FUrkhBcOqQU4O5daypEZiquSU%2FZ2Kj7MPB%2BB4TxCoZRWku25MOINCtLEg88F67womBPfEJ12tiY4f7lYt%2BM32MvC7ztbkQjbcnOf8u3%2FmfoIguJlO%2B7hM585fzU%2FXFvHVprwSzur7FwcogOOnvVmmxEw15eIcxDMbvf9I0fOwQYWwRfshw%2FJisuIFsWKQ328DxWd%2BeypxYxfIPASxRMhd8TRg4EaC1Pfs%2BU1QT35TucDCDqPayBjqyAYYewefGyDZhWFP76drXbf15teV5vWH1GMPBQCjRVqej39ns6dz1Yk3Kb2RSR9TaiUx3omxg0ijMCLKfrO292D%2Bb0VxahQfw1KWUDgPuwOBCM8eYvqBw0fxM8YfD%2BtrJRauJ91UreWWaLUFJLh13aV0dRH5WvSLo5c1KAPkvhQNOMPo%2BO0fI4AeSIWGdom86HrJtIXp6m6WfgS8lRDdmR6%2FVhznxMGZFuEs6%2BrwXo1swoJ0%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240603T104931Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCIWUUEXI%2F20240603%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=16727e48b1709160873c1b2cb212b36617fe27710d4940ad2bdaf0aefaf81a3c"
                    alt="Food"
                  />
                  <span className="text-sm mt-3 font-semibold">
                    Avocado & chilli salad
                  </span>
                  <p className="w-full mt-3 flex justify-between">
                    <Badge variant="secondary" className="text-[10px] py-1">
                      <Utensils className="w-3 h-3 mr-1" /> lunch/dinner
                    </Badge>
                    <Badge variant="secondary" className="text-[10px] py-1">
                      <ShoppingCart className="w-3 h-3 mr-1" /> 6 Ingredients
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
