export default function Home() {
    return (
        <main className="h-screen w-full flex overflow-scroll">
            <div className="w-full h-full  pt-6 px-6 space-y-6">
                <div className="w-full h-auto space-x-4"> Test</div>
                <div className="w-full h-[200px]  bg-white rounded-3xl">
                    {" "}
                    Test 2
                </div>
                <div className="w-full h-[400px] bg-indigo-400">Test3</div>
                <div className="w-full h-auto flex flex-wrap gap-4">
                    <div className="h-[200px] w-[calc(33.33%-16px)] bg-slate-50"></div>
                    <div className="h-[200px] w-[calc(33.33%-16px)] bg-slate-50"></div>
                    <div className="h-[200px] w-[calc(33.33%-16px)] bg-slate-50"></div>
                    <div className="h-[200px] w-[calc(33.33%-16px)] bg-slate-50"></div>
                    <div className="h-[200px] w-[calc(33.33%-16px)] bg-slate-50"></div>
                    <div className="h-[200px] w-[calc(33.33%-16px)] bg-slate-50"></div>
                    <div className="h-[200px] w-[calc(33.33%-16px)] bg-slate-50"></div>
                    <div className="h-[200px] w-[calc(33.33%-16px)] bg-slate-50"></div>
                    <div className="h-[200px] w-[calc(33.33%-16px)] bg-slate-50"></div>
                    <div className="h-[200px] w-[calc(33.33%-16px)] bg-slate-50"></div>
                </div>
            </div>
            <div className="w-[500px] h-full bg-white flex flex-col">
                <div className="w-full h-[200px] bg-indigo-200"></div>
                <div className="w-full h-full bg-slate-400"></div>
                <div className="w-full h-[400px] bg-indigo-400"></div>
            </div>
        </main>
    );
}
