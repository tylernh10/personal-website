/**
 * This is a general component that can be reused for education and work experiences
 * It takes in generic information and displays it in a consistent format
 */

import Image from "next/image";
import ExperienceTimelineItemDisplay from "./ExperienceTimelineItemDisplay";
import { SkillBadgeType } from "../SkillBadge/SkillBadge";

export enum ExperienceType {
    FULL_TIME = "Full time",
    PART_TIME = "Part time"
}

export type Experience = {
    title: string;
    location: string;
    experienceItems: ExperienceTimelineItem[];
    experienceImg: string;
    experienceImgAlt: string;
}

export type ExperienceTimelineItem = {
    label: string;
    type: ExperienceType;
    startDate: Date;
    endDate?: Date; // if undefined, experience item is ongoing
    description: string;
    skills: SkillBadgeType[];
}

type ExperienceDisplayProps = {
    experience: Experience;
}

export default function ExperienceDisplay({ experience }: ExperienceDisplayProps) {
    return (
        <div className="mb-10 mr-3">
            <div className="flex flex-row items-start">
                <div className="w-15 overflow-hidden rounded-md mr-3 p-3 shrink-0 border">
                    <Image
                        src={experience.experienceImg}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                        alt={experience.experienceImgAlt}
                    />
                </div>
                <div>
                    <div className="text-xl">{experience.title}</div>
                    <div className="text-sm text-muted-foreground mb-1">{experience.location}</div>
                    {experience.experienceItems.map((item, index) => (
                        <ExperienceTimelineItemDisplay key={index} label={item.label} type={item.type} startDate={item.startDate} endDate={item.endDate} description={item.description} skills={item.skills} />
                    ))}
                </div>
            </div>
        </div>
    )
}
