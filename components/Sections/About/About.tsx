import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';
import { MapPin } from "lucide-react";
import { CodeXmlIcon, Mail } from "lucide-react";
import "@/app/globals.css";
import { GitHubIcon } from "@/components/Icons/GitHubIcon";
import { LinkedInIcon } from "@/components/Icons/LinkedInIcon";

import { SkillColors } from "@/lib/SkillColors";
import SkillBadge from "../../Common/SkillBadge/SkillBadge";
import IconDisplay from "../../Common/IconDisplay/IconDisplay";

const aboutContent = {
    title: "Hello, I'm Tyler.",
    description: "he/him/his",
    content: "I'm a software engineer based in Hartford, CT. I graduated from UConn in 2024, and in my spare time I like to make music, run, and bowl.",
    location: "Hartford, CT",
    jobTitle: "SWE @ Travelers",
    gitHubLink: "https://github.com/tylernh10",
    linkedInLink: "https://www.linkedin.com/in/tylerhinrichs/",
    email: "mailto:tylerhinrichs10@gmail.com",
    skills: [
        { skill: "TypeScript", circleColor: SkillColors.DARK_GREEN },
        { skill: "JavaScript", circleColor: SkillColors.BLUE },
        { skill: "React", circleColor: SkillColors.PURPLE },
        { skill: "Node", circleColor: SkillColors.ORANGE },
        { skill: "Python", circleColor: SkillColors.YELLOW },
        { skill: "Kotlin", circleColor: SkillColors.FOREST_GREEN },
        { skill: "MongoDB", circleColor: SkillColors.DARK_BLUE },
        { skill: "PostgreSQL", circleColor: SkillColors.RED },
        { skill: "AWS", circleColor: SkillColors.TEAL },
        { skill: "GitHub Actions", circleColor: SkillColors.STONE },
        { skill: "EKS", circleColor: SkillColors.SALMON },
        { skill: "Docker", circleColor: SkillColors.LIME },
    ]
}

export default function About() {
    return (
        <div className="w-max mx-auto m-1 flex flex-col lg:flex-row lg:max-w-4xl align-center items-center lg:items-stretch mt-10">
            <div className="w-75 overflow-hidden rounded-md m-3">
                <Image
                    src="/tyler-2024.png"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                    alt="Tyler in San Francisco in 2024"
                />
            </div>

            <div className="flex flex-col">
                <Card className="card max-w-xs md:max-w-xl lg:max-w-2xl">
                    <CardHeader>
                        <CardTitle className="font-bold text-xl">{aboutContent.title}</CardTitle>
                        <CardDescription>{aboutContent.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {aboutContent.content}
                    </CardContent>
                </Card>
                <div className="flex flex-col md:flex-row">
                    <Card className="card text-center justify-center items-center">
                        <CardContent>
                            <div className="flex justify-center items-center gap-2">
                                <IconDisplay icon={<MapPin size={20} className="m-1" />} />
                                <span>{aboutContent.location}</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="card grow text-center justify-center items-center">
                        <CardContent>
                            <div className="flex justify-center items-center gap-2">
                                <IconDisplay icon={<CodeXmlIcon size={20} className="m-1" />} />
                                <span>{aboutContent.jobTitle}</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="card grow text-center">
                        <CardContent className="flex justify-center items-center gap-3">
                            <IconDisplay clickable link={aboutContent.gitHubLink} icon={<GitHubIcon className='m-1' size={20} />} />
                            <IconDisplay clickable link={aboutContent.linkedInLink} icon={<LinkedInIcon className='m-1' size={20} />} />
                            <IconDisplay clickable link={aboutContent.email} icon={<Mail className='m-1' size={20} />} />
                        </CardContent>
                    </Card>
                </div>
                <Card className="card max-w-xs md:max-w-xl lg:max-w-4xl">
                    <CardContent className="flex justify-left items-center gap-3 flex-wrap">
                        {aboutContent.skills.map((skill, index) => (
                            <SkillBadge key={index} skill={skill.skill} circleColor={skill.circleColor} />
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
