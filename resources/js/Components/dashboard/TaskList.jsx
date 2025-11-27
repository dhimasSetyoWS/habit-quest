import {IconEdit, IconStar, IconTrash, IconTrophy} from "../icon/TaskIcon";
export function TaskList({tasks, setTasks}) {

    // Hitung Total Score dari task yang statusnya "Done"
    const totalScore = tasks
        .filter((t) => t.status === "Done")
        .reduce((acc, curr) => acc + curr.points, 0);

    // Fungsi Hapus Task
    const handleDelete = (id) => {
        if (window.confirm("Yakin ingin menghapus quest ini?")) {
            setTasks(tasks.filter((task) => task.id !== id));
        }
    };

    // Fungsi Edit (Simulasi)
    const handleEdit = (id) => {
        const newTitle = prompt(
            "Edit nama task:",
            tasks.find((t) => t.id === id).title
        );
        if (newTitle) {
            setTasks(
                tasks.map((t) => (t.id === id ? { ...t, title: newTitle } : t))
            );
        }
    };

    // Fungsi Ubah Status (Cycle: Todo -> In Progress -> Done -> Todo)
    const cycleStatus = (id) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    let newStatus = "Todo";
                    if (task.status === "Todo") newStatus = "In Progress";
                    else if (task.status === "In Progress") newStatus = "Done";
                    return { ...task, status: newStatus };
                }
                return task;
            })
        );
    };

    // Helper untuk warna status
    const getStatusColor = (status) => {
        switch (status) {
            case "Done":
                return "bg-emerald-100 text-emerald-700 border-emerald-200";
            case "In Progress":
                return "bg-blue-100 text-blue-700 border-blue-200";
            default:
                return "bg-gray-100 text-gray-600 border-gray-200";
        }
    };

    return (
        <div className="mx-auto my-12">
            {/* --- HEADER DASHBOARD --- */}
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-slate-800">
                        Quest Board
                    </h2>
                    <p className="text-gray-500 mt-1">
                        Selesaikan tugas untuk menaikkan level!
                    </p>
                </div>

                {/* Score Card */}
                <div className="bg-slate-900 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 transform hover:scale-105 transition-transform duration-300">
                    <div className="p-2 bg-yellow-500/20 rounded-full">
                        <IconTrophy />
                    </div>
                    <div>
                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                            Total XP
                        </p>
                        <p className="text-2xl font-bold text-yellow-400">
                            {totalScore} XP
                        </p>
                    </div>
                </div>
            </div>

            {/* --- LIST TASK --- */}
            <div className="grid gap-4">
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className={`bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group ${
                            task.status === "Done"
                                ? "opacity-50"
                                : "opacity-100"
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
                                {task.status}
                            </button>

                            {/* Judul Task */}
                            <div className="flex flex-col">
                                <span
                                    className={`font-semibold text-lg text-slate-800 ${
                                        task.status === "Done"
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
            </div>

            {/* Empty State jika task kosong */}
            {tasks.length === 0 && (
                <div className="text-center py-12 text-gray-400 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                    <p>Belum ada quest. Tambahkan tugas baru!</p>
                </div>
            )}
        </div>
    );
}
