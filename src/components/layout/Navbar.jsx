import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-sm">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left - Logo */}
        <div className="flex items-center">
          <span className="text-lg sm:text-xl font-bold tracking-tighter text-white">
            MONO AI
          </span>
        </div>

        {/* Center navigation - Desktop */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-8 lg:gap-10">
            {["Home", "Services", "About"].map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink 
                  className="text-sm lg:text-base font-medium text-zinc-400 transition-colors hover:text-white cursor-pointer"
                >
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right CTA - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            className="rounded-full border border-white/20 bg-white/10 px-5 lg:px-6 py-2.5 lg:py-3 text-sm lg:text-base font-medium text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/40"
          >
            Get started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-zinc-300 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {["Home", "Services", "About"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-base font-medium text-zinc-400 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button
              className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-medium text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/40 mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar