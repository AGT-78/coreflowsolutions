import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Left - Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold tracking-tighter text-white">
            MONO AI
          </span>
        </div>

        {/* Center navigation - Increased font size */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-10">
            {["Home", "Services", "About"].map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink 
                  className="text-[16px] font-medium text-zinc-400 transition-colors hover:text-white cursor-pointer"
                >
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right CTA - Consistent font size increase */}
        <div className="flex items-center gap-4">
        <Button
         className="rounded-full border border-white/20 bg-white/10 px-6 py-5 text-[16px] font-medium text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/40"
        >
        Get started
        </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar