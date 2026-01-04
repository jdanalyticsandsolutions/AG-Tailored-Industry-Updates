export type Industry = "Technology" | "Finance" | "Healthcare" | "Energy" | "Retail";

export interface Update {
    id: string;
    title: string;
    content: string;
    industry: Industry;
    date: string; // ISO date string
    status: "published" | "draft";
}

// Initial Mock Data
export const INITIAL_UPDATES: Update[] = [
    {
        id: "1",
        title: "AI Regulation Framework Released",
        content: "The new global framework for AI safety has been released, impacting all major tech firms.",
        industry: "Technology",
        date: new Date().toISOString(),
        status: "published",
    },
    {
        id: "2",
        title: "Market Rally Continues",
        content: "Global markets see a 5% increase amidst positive inflation data.",
        industry: "Finance",
        date: new Date(Date.now() - 86400000).toISOString(), // Yesterday
        status: "published",
    },
    {
        id: "3",
        title: "New Telehealth Guidelines",
        content: "Federal health agencies have updated guidelines for remote patient monitoring.",
        industry: "Healthcare",
        date: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        status: "published",
    },
];

// Helper to persist mock data across HMR in development
const globalForUpdates = globalThis as unknown as { mockUpdates: Update[] };

const getStore = () => {
    if (!globalForUpdates.mockUpdates) {
        globalForUpdates.mockUpdates = [...INITIAL_UPDATES];
    }
    return globalForUpdates.mockUpdates;
}

export const getUpdates = (): Update[] => {
    const updates = getStore();
    return updates.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getUpdatesByIndustry = (industry: Industry): Update[] => {
    const updates = getStore();
    return updates.filter((u) => u.industry === industry).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getIndustries = (): Industry[] => {
    return ["Technology", "Finance", "Healthcare", "Energy", "Retail"];
};

export const addUpdate = (update: Omit<Update, "id" | "date" | "status">): Update => {
    const newUpdate: Update = {
        ...update,
        id: Math.random().toString(36).substr(2, 9),
        date: new Date().toISOString(),
        status: "published",
    };

    const updates = getStore();
    updates.unshift(newUpdate); // Add to the reference directly

    return newUpdate;
};
