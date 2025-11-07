import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export function PanelLayout() {
  const content = <Outlet />;

  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="min-h-screen w-full">
        <SidebarTrigger className="mx-1 md:mx-4" />
        <main className="px-3 md:px-6 py-8">{content}</main>
      </div>
    </SidebarProvider>
  );
}
