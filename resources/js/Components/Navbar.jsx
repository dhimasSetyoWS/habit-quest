import NavLink from "./NavLink";
import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
export function Navbar() {
    const { auth } = usePage().props;
    const [dropdown, setDropdown] = useState(false);
    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };
    const links = [
        {
            target: "welcome",
            text: "Habit",
        },
        {
            target: "welcome",
            text: "Stats",
        },
        {
            target: "welcome",
            text: "Shop",
        },
    ];
    return (
        <nav className="group relative grid grid-cols-3 bg-slate-100 shadow backdrop-blur-2xl px-4 py-2 mx-auto max-w-lg  my-4 rounded-2xl hover:-translate-y-1 transition-transform">
            <div className="logo flex justify-start items-center">
                <span className="text-lg font-bold">Habit Task</span>
            </div>
            <div className="nav-links flex justify-center items-center gap-2">
                {links.map((link, index) => {
                    return (
                        <NavLink
                            key={index}
                            href={route(link.target)}
                            active={route().current(link.target)}
                        >
                            {link.text}
                        </NavLink>
                    );
                })}
            </div>
            <div className="auth flex justify-end items-center">
                {auth.user ? (
                    <div className="relative">
                        <div
                            onClick={toggleDropdown}
                            className="cursor-pointer"
                        >
                            <img
                                className="shadow-lg rounded-full"
                                src="https://avatar.iran.liara.run/public/18"
                                alt="avatar"
                                width={40}
                            />
                        </div>

                        <div
                            className={`rounded my-4 absolute bg-amber-50 opacity-0 ${
                                dropdown && "opacity-100"
                            } transition-all px-4 py-2`}
                        >
                            <Link href={route('dashboard')}>Dashboard</Link>
                        </div>
                    </div>
                ) : (
                    <div className="space-x-2">
                        <Link className="font-bold" href={route("login")}>Login</Link>
                        <Link className="font-bold" href={route("register")}>Register</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
