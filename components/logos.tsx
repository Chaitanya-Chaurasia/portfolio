import { Badge } from "./ui/badge";

export default function Logos() {

    const companies = ["Worked at", "IDEXX", "Y Combinator", "warp.dev", "Arizona State University", "Indian Institute of Technology", "B:Side Capital & Funds"]
    return (
        <div className="flex items-center justify-center w-full gap-4">
            {companies.map((company, index) => (
                <Badge key={index} className="font-semibold text-sm tracking-tight bg-transparent shadow-none text-muted-foreground dark:text-white hover:bg-transparent">
                    {company}
                </Badge>
            ))}
        </div>
    );
}