import { Outlet } from "react-router-dom"

export function RootLayout() {
    return (
        <div className="pb-10 px-6 min-h-screen">
            <Outlet />
        </div>
    )
}