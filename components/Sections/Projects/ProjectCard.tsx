import IconDisplay from "@/components/Common/IconDisplay/IconDisplay";
import SkillBadge, { SkillBadgeType } from "@/components/Common/SkillBadge/SkillBadge";
import { GitHubIcon } from "@/components/Icons/GitHubIcon";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export enum ProjectStatus {
    IN_PROGRESS = "In progress",
    COMPLETE = "Complete",
}

export type ProjectInfo = {
    title: string;
    description: string;
    skills: SkillBadgeType[];
    status: ProjectStatus;
    gitHubLink?: string;
    externalLink?: string;
}

const statusColors: Record<ProjectStatus, Record<string, string>> = {
    [ProjectStatus.IN_PROGRESS]: {"text": "text-in-progress", "border": "border-in-progress"},
    [ProjectStatus.COMPLETE]: {"text": "text-complete", "border": "border-complete"}
}

export default function ProjectCard({ title, description, skills, status, gitHubLink, externalLink }: ProjectInfo) {
    return (
        <Card className="card min-w-3xs max-w-xs">
            <CardHeader>
                <div className="flex flex-row gap-1">
                    <IconDisplay clickable link={gitHubLink} icon={<GitHubIcon className='m-1' size={20} />} />
                    {externalLink && <IconDisplay clickable link={externalLink} icon={<ExternalLink className='m-1 text-foreground' size={20} />} />}
                </div>
                <CardTitle className="font-bold text-xl">{title}</CardTitle>
                <Badge variant="outline" className={`text-md p-3 bg-secondary ${statusColors[status].text} ${statusColors[status].border}`}>
                        <span>{status}</span>
                </Badge>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex justify-left items-center gap-2 flex-wrap text-xs mt-2">
                    {skills.map((skill, index) => (
                        <SkillBadge key={index} skill={skill.skill} circleColor={skill.circleColor} />
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
