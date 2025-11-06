import { Home, Ship } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

const modules = [
  {
    title: "Ínicio",
    url: "/",
    icon: Home,
  },
   {
    title: "Viagens",
    url: "/viagens",
    icon: Ship,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {modules.map((module) => (
              <SidebarMenuItem key={module.url}>
                <SidebarMenuButton asChild>
                  <a href={module.url}>
                    <module.icon />
                    <span>{module.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
