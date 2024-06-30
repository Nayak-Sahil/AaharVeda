import React, { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function SearchBar() {
  const [inptVal, setInptVal] = useState("");
  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        value={inptVal}
        placeholder="Search Recipe, Food's Nutrients, ..."
        className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/2"
        onChange={(e) => setInptVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            window.location.href = "/dashboard/services/recipe/" + inptVal;
          }
        }}
      />
    </div>
  );
}
