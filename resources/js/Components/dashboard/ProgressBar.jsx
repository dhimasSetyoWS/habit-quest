export function ProgressBar() {
    return (
        <>
            <p>Your Progress Today : </p>
            <div className="relative">
                <div
                    className="bg-slate-900 h-3 rounded-2xl"
                    style={{ width: "70%" }}
                ></div>
                <div className="absolute top-0 border-2 h-3 rounded-2xl border-slate-900 w-full"></div>
            </div>
        </>
    );
}
