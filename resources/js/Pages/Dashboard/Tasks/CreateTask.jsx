import { Select, Textarea, Input } from "@headlessui/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
export default function CreateTask() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: "",
        category: "",
        type: "one_time",
        points: 10,
        coins: 5,
    });

    const submit = (e) => {
        e.preventDefault();
        post(
            route("dashboard.tasks.store", {
                onFinish: () => reset(),
            })
        );
    };
    return (
        <>
            <Head title="Create Task" />
            <div className="bg-white rounded-2xl shadow">
                <form onSubmit={submit} className="p-8">
                    <div className="grid grid-cols-1 gap-2">
                        <div className="flex flex-col justify-center mb-4 space-y-2">
                            <div>
                                <InputLabel
                                    htmlFor="title"
                                    value={"Title Task/Habit"}
                                />
                                <TextInput
                                    id="title"
                                    name="title"
                                    onChange={(e) => {
                                        setData("title", e.target.value);
                                    }}
                                    className="w-full"
                                    value={data.title}
                                    isFocused={true}
                                    required
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="category"
                                    value={"Category"}
                                />
                                <TextInput
                                    id="category"
                                    name="category"
                                    onChange={(e) => {
                                        setData("category", e.target.value);
                                    }}
                                    className="w-full"
                                    value={data.category}
                                    required
                                />
                            </div>
                        </div>

                        <div className="lg:row-span-2 my-5 lg:my-0">
                            <InputLabel
                                htmlFor="description"
                                value={"Description"}
                            />
                            <Textarea
                                id="description"
                                name="description"
                                onChange={(e) => {
                                    setData("description", e.target.value);
                                }}
                                className="w-full h-full rounded-md border-gray-300 shadow-xs focus:border-indigo-500 focus:ring-indigo-500"
                                value={data.description}
                                isFocused={true}
                                required
                            />
                        </div>
                    </div>
                    <div className="mt-8 flex items-center gap-3">
                        <div>
                            <InputLabel htmlFor="type" value={"Type"} />
                            <Select
                                onChange={(e) => {
                                    setData("type", e.target.value);
                                }}
                                id="type"
                                name="type"
                                aria-label="type"
                                className={
                                    "w-full rounded-lg border-gray-300 shadow-xs focus:border-indigo-500 focus:ring-indigo-500"
                                }
                                value={data.type}
                            >
                                <option value="one_time">One Time</option>
                                <option value="paused">Daily</option>
                                <option value="routine">Routine</option>
                                <option value="longterm">Longterm</option>
                            </Select>
                        </div>
                        <div>
                            <InputLabel htmlFor="points" value={"Points"} />
                            <Input
                                type="number"
                                id="points"
                                name="points"
                                className="rounded-lg border-gray-300 shadow-xs focus:border-indigo-500 focus:ring-indigo-500"
                                onChange={(e) => {
                                    setData("points", e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="coins" value={"Coins"} />
                            <Input
                                type="number"
                                id="coins"
                                name="coins"
                                className="rounded-lg border-gray-300 shadow-xs focus:border-indigo-500 focus:ring-indigo-500"
                                onChange={(e) => {
                                    setData("coins", e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <PrimaryButton className="my-8" disabled={processing}>
                            Create Task
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </>
    );
}

CreateTask.layout = (page) => (
    <AuthenticatedLayout
        header={
            <>
                <h2>Tasks</h2>
                <p className="text-sm text-slate-400 font-light">
                    Look and see your tasks and also manage your tasks or habits
                </p>
            </>
        }
        children={page}
    />
);
