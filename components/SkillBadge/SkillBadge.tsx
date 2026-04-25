import { Badge } from "../ui/badge";

type skillBadgeProps = {
    skill: string;
    circleColor: string;
}

export default function SkillBadge({ skill, circleColor }: skillBadgeProps) {
    return (
        <Badge variant="outline" className="text-md p-3 text-secondary-foreground bg-secondary">
            <div className="flex flex-row gap-2 justify-center items-center">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: circleColor }}></div>
                <span>{skill}</span>
            </div>
        </Badge>
    )
}