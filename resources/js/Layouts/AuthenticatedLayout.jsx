import { Head, usePage } from "@inertiajs/react";
import { SideBar } from "@/Components/dashboard/Sidebar";
import { ProfileStats } from "@/Components/dashboard/ProfileStats";
import { TopButton } from "@/Components/dashboard/TopButton";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    return (
        <>
            <div className="flex h-screen bg-gray-100">
                <SideBar />
                {/* --- KONTEN UTAMA --- */}
                <div className="p-7 text-2xl font-semibold flex-1 h-screen overflow-y-scroll">
                    <div className="flex w-full justify-between items-center">
                        <div className="text-2xl font-semibold leading-tight text-gray-800">
                            {header}
                        </div>
                        {route().current("dashboard") && <ProfileStats />}
                        {route().current("dashboard.tasks.index") && <TopButton href={route('dashboard.tasks.create')} header={"Create Task"}/>}
                    </div>
                    <div className="text-base font-normal mt-4 text-gray-600">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
