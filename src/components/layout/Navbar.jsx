import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  return (
    <header className="w-full border-b border-border bg-background/70 backdrop-blur-md fixed top-0 z-50">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-3 items-center px-6">
        
        {/* Left - Logo/Brand */}
        <div>
          <span className="text-xl font-bold text-foreground">AI Agency</span>
        </div>

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
            className="rounded-full"
          >
            Book Now
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
