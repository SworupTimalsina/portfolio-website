import { ArrowUpRight } from "lucide-react";

type PortfolioCardProps = {
  title: string;
  description: string;
  tag?: string;
  image?: string;
};

export default function PortfolioCard({
  title,
  description,
  tag,
  image,
}: PortfolioCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.07]">
      {image && (
        <div
          className="h-56 bg-cover bg-center transition duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${image}')` }}
        />
      )}

      <div className="p-6">
        {tag && (
          <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/60">
            {tag}
          </span>
        )}

        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <ArrowUpRight className="mt-1 shrink-0 text-white/40 transition group-hover:text-white" />
        </div>

        <p className="mt-4 text-sm leading-7 text-white/55">{description}</p>
      </div>
    </div>
  );
}