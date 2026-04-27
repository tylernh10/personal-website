import { Badge } from "@/components/ui/badge";

export type SkillBadgeType = {
    skill: string;
    circleColor: string;
}

type SkillBadgeProps = SkillBadgeType;

export default function SkillBadge({ skill, circleColor }: SkillBadgeProps) {
    return (
        <Badge variant="outline" className="text-md p-3 text-secondary-foreground bg-secondary">
            <div className="flex flex-row gap-2 justify-center items-center">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: circleColor }} />
                <span>{skill}</span>
            </div>
        </Badge>
    )
}
