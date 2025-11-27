import { usePage } from "@inertiajs/react"
import { LevelUpicon } from "../icon/LevelUpIcon";
import { CoinIcon } from "../icon/CoinIcon";
import { StreakIcon } from "../icon/StreakIcon";
import {Link} from "@inertiajs/react";

export function ProfileStats({className = ''}) {
    const user = usePage().props.auth.user;
    return(
        <div className={"relative px-2 py-2 border-l-2 border-l-amber-800 bg-slate-900 rounded-lg text-gray-100 min-w-[200px] max-w-xs hover:translate-y-1 transition-all cursor-default" + className}>
            <div className="flex">
                <img className="absolute -top-3 rounded-full border-slate-900 border-2" src="https://avatar.iran.liara.run/public/18" alt="" width={30}/>
            </div>
            <div className="text-sm mt-2 flex items-center justify-between">
                <div>
                    {user.name}
                </div>
                <Link href="profile.edit" className="text-[8px] border border-slate-50 rounded px-2 py-1 font-semibold">See Details</Link>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <div className="text-center flex items-center">
                    <LevelUpicon/>
                    20</div>
                <div className="text-center flex items-center">
                    <CoinIcon/>
                    20</div>
                <div className="text-center flex items-center">
                    <StreakIcon/>
                    20</div>
            </div>
        </div>
    )
}
