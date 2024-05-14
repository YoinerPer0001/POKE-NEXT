import { Sidebar } from '../../components/Sidebar';
//lrc para crear el componente (snippet)
export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
                <div className="flex">
                    <Sidebar/>
                    <div className=" flex flex-grow text-slate-900 ">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}