"use client";

import { ChevronsRight, CirclePlus, CircleMinus } from "lucide-react";
import { ExperienceTimelineItem } from "./ExperienceDisplay";
import { useState } from "react";
import { getDateRangeString, getTotalDuration } from "@/lib/utils";
import SkillBadge from "../SkillBadge/SkillBadge";

type ExperienceTimelineItemProps = ExperienceTimelineItem;

export default function ExperienceTimelineItemDisplay({ label, type, startDate, endDate, description, skills }: ExperienceTimelineItemProps) {
    const [expandedDesc, setExpandedDesc] = useState<boolean>(false);

    return (
        <div className="flex flex-row items-start mb-4">
            <ChevronsRight className="m-1 text-muted-foreground shrink-0" size={20} />
            <div className="p-4 border rounded-md hover:bg-secondary hover:cursor-pointer transition-all duration-200 ease-in-out" onClick={() => setExpandedDesc(!expandedDesc)}>
                <div className="flex flex-row gap-4">
                    <div>
                        <div>
                            <div className="text-md">{label}</div>
                            <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                                <div className="text-sm text-muted-foreground">{type ? type : 'N/A'}</div>
                                <div className="text-sm text-muted-foreground">{getDateRangeString(startDate, endDate)}</div>
                                <div className="text-sm text-muted-foreground">{getTotalDuration(startDate, endDate)}</div>
                            </div>
                        </div>
                        <div className={`text-sm my-3 ${expandedDesc ? 'visible' : 'hidden'}`}>{description}</div>
                        <div className="flex justify-left items-center gap-2 flex-wrap text-xs mt-2">
                            {skills.map((skill, index) => (
                                <SkillBadge key={index} skill={skill.skill} circleColor={skill.circleColor} />
                            ))}
                        </div>
                    </div>
                    <div className="sm:hidden">{expandedDesc ? <CircleMinus className="text-muted-foreground" size={20} /> : <CirclePlus size={20} />}</div>
                </div>
            </div>
        </div>
    )
}
