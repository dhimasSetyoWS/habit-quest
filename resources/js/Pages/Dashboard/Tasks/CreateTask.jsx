import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react"
export default function CreateTask() {
    return(
        <>
        <Head title="Create Task"/>
            
        </>
    )
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
    } children={page}/>
)
