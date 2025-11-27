import { Link } from "@inertiajs/react";
import { PlusIcon } from "../icon/PlusIcon";

export function TopButton({header, href}) {
    return(
        <Link href={href} className="hover:-translate-y-1 transition-all text-gray-100 bg-slate-900 w-fit h-fit px-4 py-2 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-md">
                <div><PlusIcon/></div>
                <div>{header}</div>
            </div>
        </Link>
    )
}
