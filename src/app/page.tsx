import { getUpdates, getUpdatesByIndustry, Industry } from "@/data/updates";
import UpdateCard from "@/components/UpdateCard";

export const dynamic = "force-dynamic";

interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Home({ searchParams }: HomeProps) {
  const industryParam = searchParams.industry as Industry | undefined;
  const updates = industryParam ? getUpdatesByIndustry(industryParam) : getUpdates();

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">
          {industryParam ? `${industryParam} Updates` : "Latest Updates"}
        </h2>
        <p className="text-muted-foreground">
          {industryParam
            ? `Real-time intelligence for the ${industryParam.toLowerCase()} sector.`
            : "Aggregated intelligence from all tracked sectors."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {updates.map((update) => (
          <UpdateCard key={update.id} update={update} />
        ))}
        {updates.length === 0 && (
          <div className="col-span-full py-12 text-center text-muted-foreground bg-white/5 rounded-xl border border-dashed border-white/10">
            No updates found for this category.
          </div>
        )}
      </div>
    </div>
  );
}
