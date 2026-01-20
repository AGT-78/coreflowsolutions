import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  return (
    <header className="w-full border-b border-border bg-background/70 backdrop-blur-md">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-3 items-center px-6">
        
        {/* Left spacer */}
        <div />

        {/* Center navigation */}
        <NavigationMenu className="flex justify-center">
          <NavigationMenuList className="flex gap-8">
            <NavigationMenuItem>
              <NavigationMenuLink className="text-sm font-medium text-foreground/80 hover:text-foreground transition">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="text-sm font-medium text-foreground/80 hover:text-foreground transition">
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="text-sm font-medium text-foreground/80 hover:text-foreground transition">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right CTA */}
        <div className="flex justify-end">
          <Button
            variant="secondary"
            className="rounded-full bg-white text-black/90 hover:bg-white/90"
          >
            Book Now
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
