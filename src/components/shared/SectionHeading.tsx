type SectionHeadingProps = {
  title: string;
  description?: string;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-2xl">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-slate-600 dark:text-slate-400">{description}</p>
      ) : null}
    </div>
  );
}
