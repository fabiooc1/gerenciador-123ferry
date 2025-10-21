import { Outlet } from "react-router-dom"

type RouteLayoutProps = {
    children?: React.ReactNode
}

export function RootLayout({ children }: RouteLayoutProps) {
    return (
        <div className="pb-10 px-6 min-h-screen">
            {children ?? <Outlet />}
        </div>
    )
}