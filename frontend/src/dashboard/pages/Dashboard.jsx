import React from "react";
import {
  TrendingUp,
  ShoppingCart,
  Utensils,
  ExternalLink,
  Leaf,
} from "lucide-react";

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

export default function Dashboard() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg text-primetext font-semibold md:text-lg">
          Dashboard
        </h1>
      </div>

      <section className="flex flex-col md:flex-row w-full h-max items-center justify-between">
        {/* Trending Recipe */}
        <div className="w-72">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm tracking-wide font-medium text-primary">
                Trending Recipe
                <p className="text-[10px] text-primetext">💖 Most Likely</p>
              </CardTitle>
              <TrendingUp className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent className="px-6 py-2">
              <Carousel className="w-full mx-auto max-w-xs">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div>
                        <Card className="border-0">
                          <CardContent className="flex flex-col aspect-square items-center justify-center p-2">
                            <img
                              className="rounded-full shadow-md"
                              src="https://edamam-product-images.s3.amazonaws.com/web-img/50b/50b1b42b19b2037118c82e10c4b14acb-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLWVhc3QtMSJIMEYCIQCR%2Buc1OHao35a2qIdB%2FT3cwfrwKYzYqXmIJI%2B0CGN67AIhANvXDIJHz7KRvDdvwFSFKmumoE6XnyjUsvIq2R3g1L2oKsIFCMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2Igyp3JekT7nwTNmgnzkqlgX%2BJr6ZVC%2BL9NvM8uDVy8V1leJK2tbuUxdVq%2B3t0FiNqiVbK3nL0kd4FSBgv0lqHOqQBEwQVdzwQSrD5aCcrK28S%2Bt5DitWAjz3tKDQyvW%2B4VABqTSt9k57MMY9sJCFvd%2F7YeKnI7GBF3RznE8zVzrpq7BfrMTRoEn4SJLyt%2FUiQ%2FSvqGw5CxeNdUHZizIAiHRYN6LF4nFusbSTo2x1N5DA5gUGMpGLPu3ZORTBQ%2FKRo5f%2FcHr561O1wc4iSIjBLu7pQnTFiscStfK%2BCkWc6wFnnBCc1dBLDkdSCvGB0nC98%2BL37YokOnlUg1qm9NOWUf7jVo11DI2m9bYDy3J719R0kudnEyygBEaChv6z1jlQ%2BGjQuJsynkLflL7y1hkMnE9hdV8LFFba4BPQDheibNttR2MFQH64wd%2FhJQoMELX4Nh2MovOb8ssUI6%2BJCE5TPLvow0pFHdnhldLpF0HYnqWMJlNd423CvUuuiLw0eAaOL78dJycWOU%2BO2ArwO%2BdWE6bwO4cj6vX9SYw6KUTEyaxhzvvHdtqUZAct5DcCa9wBsQ7bwgL%2Fl1UDK%2Fg8ic7GZTOiTc7nTXLGmjeWfOHly2pN15l6T4yr%2FX8HUss2hgSpSH%2BOhfp1g%2FGI4HAyxAe%2Fh0AndtS32aTZ9TH0ymhFQ2z8IkCRMm8iG28W6Z1Nnz0IPIegIJz%2Fx0%2BOdpoHHt6%2BNYHfUGrsamfsgEFiY1v3TVFpPGCe5g5n9psOuDCgwBefxcXhoJYKSHRQZ4FesKpMHZGWPRUXIfMk8br8pmptexSAy4a59SE%2FJDrD%2FVowlcpAxESAgvnojPPmdVYMJiTiSZPJQaqGzwaVgJV5sc413StJiqTfZ68KwwISD%2FvAhg2Hv7sgcDaRlTCusM2yBjqwAaAEYMsd7jp9IuDSyKHRGcuEEvOzxY8fBVQE8O282s0fJ9V7WW8t06%2FzKhyycK3ZFV1InwEia7SKxmFA1pkRhk5pSXUMCpqekwhK1uxCtBMfJR35sAXIT%2FU197vBXwd%2FSLfDksjevTFygIlexmXgAlhEwwJZbDx8JBR5wV0GJQMPrZW4n1eDTPeKxZsw5mt7Lt8WiPmT5903LeHH7jYot59HbCJW0DJZfzquTw12tYqo&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240526T165045Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPY7DWE6N%2F20240526%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f353f28b6b468b189a07692f9c7fedcfcfccaf61b2b24eb008e25623c46ce61d"
                              alt="Food"
                            />
                            <span className="text-sm mt-3 font-semibold">
                              {index + 1} Avocado & chilli salad
                            </span>
                            <p className="w-full mt-3 flex justify-between">
                              <Badge
                                variant="secondary"
                                className="text-[10px] py-1"
                              >
                                <Utensils className="w-3 h-3 mr-1" />{" "}
                                lunch/dinner
                              </Badge>
                              <Badge
                                variant="secondary"
                                className="text-[10px] py-1"
                              >
                                <ShoppingCart className="w-3 h-3 mr-1" /> 6
                                Ingredients
                              </Badge>
                            </p>
                            <a
                              className="text-sm mt-5 text-muted-foreground text-primary flex item-center hover:underline"
                              href="#"
                            >
                              Know more{" "}
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
            </CardContent>
          </Card>
        </div>

        {/* Daily Nutrients Section */}
        <div className="w-72 mt-3 md:mt-0 sm:w-[70%] h-full">
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
          </Card>
        </div>
      </section>
    </>
  );
}
