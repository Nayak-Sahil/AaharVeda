import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"

export default function ServiceCard({ style, title, description, icon, content, isSoon, cardContentStyle }) {
  return (
    <div className={`w-72 relative mr-5 mb-5 ${style}`}>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm tracking-wide font-medium text-primary">
            {title}
            <p className="text-[10px] text-primetext">{description}</p>
          </CardTitle>
          {isSoon ? <Badge className="text-[10px] absolute top-5 right-5 tracking-wide text-center" variant="secondary">Comming Soon</Badge> : ""} {icon}
        </CardHeader>
        <CardContent className={`px-6 py-2 ${cardContentStyle}`}>
            {content}
        </CardContent>
      </Card>
    </div>
  );
}
