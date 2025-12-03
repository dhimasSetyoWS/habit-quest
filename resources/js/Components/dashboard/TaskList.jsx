import { IconEdit, IconStar, IconTrash, IconTrophy } from "../icon/TaskIcon";
import { Task } from "./Task";
export function TaskList({ tasks, exp }) {
    // Hitung Total Score dari task yang statusnya "Done"
    // const totalScore = tasks
    //     .filter((t) => t.status === "Done")
    //     .reduce((acc, curr) => acc + curr.points, 0);


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
                            {exp} XP
                        </p>
                    </div>
                </div>
            </div>

            {/* --- LIST TASK --- */}
            <div className="grid gap-4">
                <Task tasks={tasks}/>
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
