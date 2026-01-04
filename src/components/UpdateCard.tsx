import { Update } from "@/data/updates";
import { Calendar, Tag } from "lucide-react";

interface UpdateCardProps {
    update: Update;
}

const UpdateCard = ({ update }: UpdateCardProps) => {
    return (
        <div className="group glass-panel rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
                <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Tag className="w-3 h-3" />
                    {update.industry}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(update.date).toLocaleDateString()}
                </span>
            </div>

            <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {update.title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
                {update.content}
            </p>
        </div>
    );
};

export default UpdateCard;
