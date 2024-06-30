import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge"

export default function LabelsAccordion({title, labelList}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-sm">{title}</AccordionTrigger>
        <AccordionContent>
            {
                labelList.length != 0 ? Array.from(labelList).map((labelItem)=>{
                    return(
                        <Badge variant="outline" className="m-1">{labelItem}</Badge>
                    )
                }) : "Nothing to show."
            }
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
