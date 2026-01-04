"use client";

import { createUpdate } from "../actions";
import { getIndustries } from "@/data/updates";
import { PlusCircle, Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

// Component to handle the submit button state pending the server action
function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full flex items-center justify-center gap-2 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20"
        >
            {pending ? (
                <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Publishing...
                </>
            ) : (
                <>
                    <PlusCircle className="w-5 h-5" />
                    Publish Update
                </>
            )}
        </button>
    );
}

export default function AdminPage() {
    const industries = getIndustries();

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold tracking-tight">New Update</h2>
                <p className="text-muted-foreground">
                    Publish a new intelligence update to the dashboard.
                </p>
            </div>

            <form action={createUpdate} className="space-y-6 glass-panel p-8 rounded-xl">
                <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium">Title</label>
                    <input
                        required
                        name="title"
                        id="title"
                        placeholder="e.g. Market Shift in AI Sector"
                        className="w-full px-4 py-2 bg-background/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500/50 outline-none transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="industry" className="text-sm font-medium">Industry</label>
                    <select
                        required
                        name="industry"
                        id="industry"
                        className="w-full px-4 py-2 bg-background/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500/50 outline-none transition-all appearance-none"
                    >
                        {industries.map((ind) => (
                            <option key={ind} value={ind} className="bg-background">
                                {ind}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="content" className="text-sm font-medium">Content</label>
                    <textarea
                        required
                        name="content"
                        id="content"
                        rows={5}
                        placeholder="Detailed analysis..."
                        className="w-full px-4 py-2 bg-background/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500/50 outline-none transition-all resize-none"
                    />
                </div>

                <div className="pt-4">
                    <SubmitButton />
                </div>
            </form>
        </div>
    );
}
