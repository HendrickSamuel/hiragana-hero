"use client"

import { useTheme } from "./ThemeProvider"
import { Button } from "@/components/ui/button"
import { Palette } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function ThemePicker() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Palette className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("red")}>
          <div className="w-4 h-4 rounded-full bg-red-500 mr-2" />
          Red
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("blue")}>
          <div className="w-4 h-4 rounded-full bg-blue-500 mr-2" />
          Blue
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("sakura")}>
          <div className="w-4 h-4 rounded-full bg-pink-300 mr-2" />
          Sakura
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

