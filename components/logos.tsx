export default function Logos() {
    const companies = ["IDEXX", "B:Side Capital & Funds", "ASU", "IIT Delhi", "warp.dev", "Mosaic", "Y Combinator and early-stage startups"]
    
    return (
        <div className="w-full overflow-hidden">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4">
                <span className="text-sm font-semibold tracking-tighter text-muted-foreground whitespace-nowrap">
                    I&apos;ve worked at:
                </span>
                {companies.map((company, index) => (
                    <div key={index} className="flex items-center">
                        <span className="text-sm font-semibold tracking-tighter text-muted-foreground whitespace-nowrap">
                            {company}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}