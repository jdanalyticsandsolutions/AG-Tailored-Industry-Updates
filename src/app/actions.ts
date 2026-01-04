"use server";

import { addUpdate as addUpdateInternal, Industry } from "@/data/updates";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createUpdate(formData: FormData) {
    const title = formData.get("title") as string;
    const industry = formData.get("industry") as Industry;
    const content = formData.get("content") as string;

    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate delay

    addUpdateInternal({
        title,
        industry,
        content,
    });

    revalidatePath("/");
    redirect("/");
}
