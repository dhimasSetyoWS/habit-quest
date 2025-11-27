import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import {
    IconDashboard,
    IconInbox,
    IconUser,
    IconCalendar,
    IconSearch,
    IconAnalytics,
    IconFolder,
    IconSetting,
    IconChevronLeft,
    IconLogo,
} from "../icon/SidebarIcon";

export function SideBar() {
    const MOBILE_VIEW = 768;
    const [open, setOpen] = useState(window.innerWidth < MOBILE_VIEW ? false : true);
    useEffect(() => {
        const checkMobile = () => {
            if (window.innerWidth < MOBILE_VIEW) {
                setOpen(false);
            } else {
                setOpen(true);
            }
        };
        checkMobile();

        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);
    // Data Menu
    const Menus = [
        { title: "Dashboard", icon: <IconDashboard />, target: "dashboard", active : "dashboard" },
        { title: "Tasks", icon: <IconInbox />, target: "dashboard.tasks.index", active : "dashboard.tasks.*" },
        { title: "Accounts", icon: <IconUser />, target: "welcome", active : "welcome", gap: true },
        { title: "Schedule", icon: <IconCalendar />, target: "welcome", active : "welcome" },
        { title: "Search", icon: <IconSearch />, target: "welcome", active : "welcome" },
        { title: "Analytics", icon: <IconAnalytics />, target: "welcome", active : "welcome" },
        { title: "Files", icon: <IconFolder />, target: "welcome", active : "welcome", gap: true },
        { title: "Setting", icon: <IconSetting />, target: "welcome", active : "welcome" },
    ];
    return (
        <>
            {/* --- SIDEBAR --- */}
            <div
                className={` ${
                    open ? "w-72" : "w-20"
                } bg-slate-900 h-screen p-5 pt-8 relative duration-300`}
            >
                {/* Tombol Toggle Bulat */}
                <div
                    className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 border-slate-900
           border-2 rounded-full bg-white flex items-center justify-center
           ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                >
                    <IconChevronLeft />
                </div>

                {/* Logo Header */}
                <div className="flex gap-x-4 items-center">
                    <div
                        className={`cursor-pointer duration-500 ${
                            open && "rotate-360"
                        }`}
                    >
                        <IconLogo />
                    </div>
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${
                            !open && "scale-0 hidden"
                        }`}
                    >
                        Designer
                    </h1>
                </div>

                {/* List Menu */}
                <ul className="pt-6">
                    {Menus.map((Menu, index) => {
                        return (
                        <li key={index}>
                            <Link
                                className={`flex rounded-md p-2 cursor-pointer hover:bg-white/10 text-gray-300 text-sm items-center gap-x-4 transition-all ease-in-out ${
                                    route().current(Menu.active)
                                        ? "text-gray-300 border-l-2 border-l-amber-400 bg-white/15"
                                        : ""
                                }
              ${Menu.gap ? "mt-9" : "mt-2"}`}
                                href={route(
                                    Menu.target ? Menu.target : "welcome"
                                )}
                            >
                                {/* Ikon */}
                                <div className="min-w-6">{Menu.icon}</div>

                                {/* Teks Menu */}
                                <span
                                    className={`${
                                        !open && "hidden"
                                    } origin-left duration-200`}
                                >
                                    {Menu.title}
                                </span>
                            </Link>
                        </li>
                    )
                    }
                    )}
                </ul>
            </div>
        </>
    );
}
