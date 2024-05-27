import {
  Bell,
  Home,
  Menu,
  Search,
  LayoutList,
  FolderHeart,
  UserRound,
  LogOut,
  UserRoundCog,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import recipeIllustration from "../assets/illustration/Recipe_Illustration.png";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[235px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <a href="/" className="flex items-center gap-2 font-semibold">
              <span className="text-primetext">
                Aahar<span className="text-primary">Veda</span>
              </span>
            </a>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 mt-3">
            <nav className="grid items-start px-3 text-sm font-medium lg:px-4">
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
              >
                <LayoutList className="h-4 w-4" />
                Services
                <Badge className="ml-auto bg-gray-200 text-[11px] py-0 text-foreground">
                  New
                </Badge>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-3 text-primary transition-all hover:text-primary"
              >
                <FolderHeart className="h-4 w-4" />
                Favourites{" "}
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
              >
                <UserRound className="h-4 w-4" />
                Account
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-red-400"
              >
                <LogOut className="h-4 w-4 rotate-180" />
                Log Out
              </a>
            </nav>
          </div>
          <div className="mt-auto mx-auto p-4">
            <img
              src={recipeIllustration}
              width={170}
              alt="Recipe Kitchen Illustration"
            />
            <p className="text-[11px] mt-2 text-foreground font-semibold w-full flex justify-center items-center">
              Copyright @ Aahar<span className="text-primary">Veda</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <a
                  href="#"
                  className="flex items-center gap-2 mb-5 text-lg font-semibold"
                >
                  <span className="text-primetext">
                    Aahar<span className="text-primary">Veda</span>
                  </span>
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-base text-muted-foreground hover:text-primary"
                >
                  <Home className="h-4 w-4" />
                  Dashboard
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-base text-foreground hover:text-primary"
                >
                  <LayoutList className="h-4 w-4" />
                  Services
                  <Badge className="ml-auto bg-gray-200 text-[11px] py-0 text-foreground">
                    New
                  </Badge>
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-base text-muted-foreground hover:text-primary"
                >
                  <FolderHeart className="h-4 w-4" />
                  Favourites
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-base text-muted-foreground hover:text-primary"
                >
                  <UserRound className="h-5 w-5" />
                  Account
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-base text-muted-foreground hover:text-primary"
                >
                  <LogOut className="h-5 w-5" />
                  Log Out
                </a>
              </nav>
              <div className="mt-auto mx-auto p-4">
                <img
                  src={recipeIllustration}
                  width={170}
                  alt="Recipe Kitchen Illustration"
                />
                <p className="text-[11px] mt-2 text-foreground font-semibold w-full flex justify-center items-center">
                  Copyright @ Aahar<span className="text-primary">Veda</span>
                </p>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search Recipe, Food's Nutrients, ..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/2"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full shadow-sm bg-white hover:bg-gray-100 hover:shadow-inner"
              >
                <UserRoundCog className="h-5 w-5 text-primetext" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}