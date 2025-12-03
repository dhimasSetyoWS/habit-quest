import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ProgressBar } from "@/Components/dashboard/ProgressBar";
import { TaskList } from "@/Components/dashboard/TaskList";
import { useState } from "react";
export default function DashboardTasks({tasks, exp}) {
    // const [tasks, setTasks] = useState([
    //     {
    //         id: 1,
    //         title: "Selesaikan Desain Sidebar",
    //         status: "Done",
    //         points: 50,
    //     },
    //     {
    //         id: 2,
    //         title: "Integrasi API Login",
    //         status: "In Progress",
    //         points: 100,
    //     },
    //     { id: 3, title: "Perbaiki Bug CSS Mobile", status: "Todo", points: 30 },
    //     { id: 4, title: "Buat Dokumentasi Readme", status: "Todo", points: 20 },
    // ]);
    return (
        <>
            <Head title="Tasks" />
            <div className="">
                <ProgressBar />
                <TaskList tasks={tasks} exp={exp}/>
            </div>
        </>
    );
}

// Penggunaan layout yang benar di inertia agar persistent layout
DashboardTasks.layout = (page) => (
    <AuthenticatedLayout
        children={page}
        header={
            <>
                <h2>Tasks</h2>
                <p className="text-sm text-slate-400 font-light">
                    Look and see your tasks and also manage your tasks or habits
                </p>
            </>
        }
    />
);
