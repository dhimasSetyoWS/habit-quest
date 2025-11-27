import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 my-2">
                <div className="bg-slate-900 text-slate-50 px-4 py-2 rounded-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet consequuntur rerum error voluptatibus similique
                    deleniti nulla sequi ipsum, eius expedita!
                </div>
                <div className="bg-slate-900 text-slate-50 px-4 py-2 rounded-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet consequuntur rerum error voluptatibus similique
                    deleniti nulla sequi ipsum, eius expedita!
                </div>
                <div className="bg-slate-900 text-slate-50 px-4 py-2 rounded-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet consequuntur rerum error voluptatibus similique
                    deleniti nulla sequi ipsum, eius expedita!
                </div>
                <div className="bg-slate-900 text-slate-50 px-4 py-2 rounded-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet consequuntur rerum error voluptatibus similique
                    deleniti nulla sequi ipsum, eius expedita!
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-3 gap-2">
                <div className="col-span-2 bg-slate-900 text-slate-50 px-4 py-2 rounded-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet consequuntur rerum error voluptatibus similique
                    deleniti nulla sequi ipsum, eius expedita!
                </div>
                <div className="bg-slate-900 text-slate-50 px-4 py-2 rounded-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet consequuntur rerum error voluptatibus similique
                    deleniti nulla sequi ipsum, eius expedita!
                </div>
                <div className="bg-slate-900 text-slate-50 lg:row-span-2 px-4 py-2 rounded-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet consequuntur rerum error voluptatibus similique
                    deleniti nulla sequi ipsum, eius expedita!
                </div>
                <div className="bg-slate-900 text-slate-50 col-span-2 row-span-2 px-4 py-2 rounded-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet consequuntur rerum error voluptatibus similique
                    deleniti nulla sequi ipsum, eius expedita!
                </div>
                <div className="bg-slate-900 text-slate-50 lg:row-span-2 px-4 py-2 rounded-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet consequuntur rerum error voluptatibus similique
                    deleniti nulla sequi ipsum, eius expedita!
                </div>
                <div className="bg-slate-900 text-slate-50 px-4 py-2 rounded-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet consequuntur rerum error voluptatibus similique
                    deleniti nulla sequi ipsum, eius expedita!
                </div>
            </div>
        </>
    );
}


// Penggunaan layout yang benar di inertia agar persistent layout
Dashboard.layout = (page) => (
    <AuthenticatedLayout
        children={page}
        header={
            <>
                <h2>Dashboard</h2>
                <p className="text-sm text-slate-400 font-light">
                    Look and see your overall status and statistics
                </p>
            </>
        }
    />
);
