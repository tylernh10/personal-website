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
import IconDisplay from "../IconDisplay/IconDisplay";
import SkillBadge from "../SkillBadge/SkillBadge";
import { SkillColors } from "@/lib/SkillColors";

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
        <div className="w-max mx-auto my-20">
            <div className="flex flex-col lg:flex-row justify-center items-center">
                <Image
                    src="/tyler-2024.png"
                    width={250}
                    height={250}
                    className="rounded-md m-3"
                    alt="Tyler in San Francisco in 2024"
                />
                <div className="flex flex-col">
                    <Card className="card max-w-xs md:max-w-xl">
                        <CardHeader>
                            <CardTitle className="font-bold">{aboutContent.title}</CardTitle>
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
                </div>
            </div>
            <Card className="card max-w-xs md:max-w-xl lg:max-w-4xl">
                <CardContent className="flex justify-center items-center gap-3 flex-wrap">
                    {aboutContent.skills.map((skill, index) => (
                        <SkillBadge key={index} skill={skill.skill} circleColor={skill.circleColor} />
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}