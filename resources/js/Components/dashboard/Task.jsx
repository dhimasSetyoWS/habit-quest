import { router } from "@inertiajs/react";
import { IconEdit, IconStar, IconTrash } from "../icon/TaskIcon";
import capitalize from "@/utils/capitalize";
export function Task({ tasks }) {
    // Fungsi Hapus Task
    const handleDelete = (id) => {
        console.log(id);
        // if (window.confirm("Yakin ingin menghapus quest ini?")) {
        //     setTasks(tasks.filter((task) => task.id !== id));
        // }
    };

    // Fungsi Edit (Simulasi)
    const handleEdit = (id) => {
        console.log(tasks.find((task) => task.id === id));
    };

    // Fungsi Ubah Status (Cycle: Todo -> In Progress -> Done -> Todo)
    const cycleStatus = (id) => {
        router.patch(route('task.cycle', id));
    };

    // Helper untuk warna status
    const getStatusColor = (status) => {
        switch (status) {
            case "done":
                return "bg-emerald-100 text-emerald-700 border-emerald-200";
            case "progress":
                return "bg-blue-100 text-blue-700 border-blue-200";
            default:
                return "bg-gray-100 text-gray-600 border-gray-200";
        }
    };
    return (
        <>
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className={`bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group ${
                        task.status === "done" ? "opacity-50" : "opacity-100"
                    }`}
                >
                    {/* Bagian Kiri: Info Task */}
                    <div className="flex items-center gap-4 flex-1">
                        {/* Status Badge (Clickable) */}
                        <button
                            onClick={() => cycleStatus(task.id)}
                            className={`px-3 py-1 rounded-full text-xs font-bold border cursor-pointer select-none transition-colors min-w-[100px] text-center ${getStatusColor(
                                task.status
                            )}`}
                            title="Klik untuk ubah status"
                        >
                            {capitalize(task.status)}
                        </button>

                        {/* Judul Task */}
                        <div className="flex flex-col">
                            <span
                                className={`font-semibold text-lg text-slate-800 ${
                                    task.status === "done"
                                        ? "line-through text-slate-400"
                                        : ""
                                }`}
                            >
                                {task.title}
                            </span>
                        </div>
                    </div>

                    {/* Bagian Kanan: Score & Action */}
                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                        {/* Points Badge */}
                        <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-lg border border-yellow-100">
                            <IconStar />
                            <span className="font-bold text-yellow-600">
                                +{task.points}
                            </span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 border-l pl-4 border-gray-200">
                            <button
                                onClick={() => handleEdit(task.id)}
                                className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                                title="Edit Task"
                            >
                                <IconEdit />
                            </button>
                            <button
                                onClick={() => handleDelete(task.id)}
                                className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                title="Delete Task"
                            >
                                <IconTrash />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
