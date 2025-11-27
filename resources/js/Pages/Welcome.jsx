import { Head, Link } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
export default function Welcome({ auth, laravelVersion, phpVersion, gwprops }) {
    return (
        <>
            <Head title="Welcome" />
            <Navbar />
            <div className="grid grid-cols-5 gap-2 mx-4 mt-8">
                <div className="col-span-3 rounded-2xl bg-slate-950 p-4 min-h-[450px]"></div>
                <div className="col-span-2 rounded-2xl bg-slate-800 p-4 min-h-[450px]"></div>
            </div>
            <div className="gap-2 mx-4 mt-2">
                <div className="h-[200px] bg-slate-950 rounded-2xl"></div>
            </div>
        </>
    );
}
