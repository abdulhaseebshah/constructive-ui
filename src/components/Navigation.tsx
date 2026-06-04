import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

function Navigation() {
  return (
    <div>
      <NavigationMenu className="gap-4">
        <NavigationMenuList>
          <NavigationMenuItem>Home</NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Navigation;
