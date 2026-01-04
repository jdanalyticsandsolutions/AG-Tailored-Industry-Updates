import Link from "next/link";
// import { LayoutGrid, Server, Activity, DollarSign, Stethoscope, Zap, ShoppingBag } from "lucide-react"; 
// Note: Lucide icons will be uncommented once installed. using text for now to avoid build errors if I try to run before install.
// actually, I will write it with the imports and rely on the next step to install them.
import { Laptop, Activity, DollarSign, Zap, ShoppingBag, LayoutGrid, PlusCircle } from "lucide-react";
import { getIndustries } from "@/data/updates";

const Sidebar = () => {
    const industries = getIndustries();

    const getIcon = (industry: string) => {
        switch (industry) {
            case "Technology": return <Laptop className="w-5 h-5" />;
            case "Finance": return <DollarSign className="w-5 h-5" />;
            case "Healthcare": return <Activity className="w-5 h-5" />;
            case "Energy": return <Zap className="w-5 h-5" />;
            case "Retail": return <ShoppingBag className="w-5 h-5" />;
            default: return <LayoutGrid className="w-5 h-5" />;
        }
    };

    return (
        <aside className="w-64 h-screen fixed left-0 top-0 border-r border-white/10 bg-background/80 backdrop-blur-md hidden md:flex flex-col">
            <div className="p-6 border-b border-white/10">
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                    Industry<br />Updates
                </h1>
            </div>

            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-2">
                    Dashboards
                </div>

                <Link href="/" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-white/5 transition-colors text-foreground">
                    <LayoutGrid className="w-5 h-5" />
                    All Updates
                </Link>

                <div className="pt-4">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">
                        Industries
                    </div>
                    {industries.map((industry) => (
                        <Link
                            key={industry}
                            href={`/?industry=${industry}`}
                            className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-white/5 transition-colors text-muted-foreground hover:text-foreground"
                        >
                            {getIcon(industry)}
                            {industry}
                        </Link>
                    ))}
                </div>
            </nav>

            <div className="p-4 border-t border-white/10">
                <Link href="/admin" className="flex items-center gap-2 justify-center w-full py-2 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors">
                    <PlusCircle className="w-4 h-4" />
                    Add Update
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;
