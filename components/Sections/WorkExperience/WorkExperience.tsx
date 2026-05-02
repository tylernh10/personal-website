import ExperienceDisplay, { Experience, ExperienceType } from "@/components/Common/ExperienceDisplay/ExperienceDisplay"
import { SkillColors } from "@/lib/SkillColors"

const workExperiences: Experience[] = [
    {
        title: "Travelers",
        location: "Hartford, CT",
        experienceImg: "/travelers-logo-square.png",
        experienceImgAlt: "Travelers logo",
        experienceItems: [
            {
                label: "Associate Software Engineer",
                type: ExperienceType.FULL_TIME,
                startDate: new Date('2025-06-01'),
                description: "Building a Backstage-based application catalog to provide a centralized hub for software discovery and management. Creating a domain API as an abstraction layer to provide detailed Identity Provider information to Backstage catalog and other internal applications, improving developer experience through streamlined read and write access to Okta app and auth server information.",
                skills: [
                    { skill: "TypeScript", circleColor: SkillColors.BLUE },
                    { skill: "PostgreSQL", circleColor: SkillColors.ORANGE },
                    { skill: "Backstage.io", circleColor: SkillColors.DARK_BLUE },
                    { skill: "EKS", circleColor: SkillColors.TEAL },
                    { skill: "Docker", circleColor: SkillColors.LIME },
                    { skill: "Claude Code", circleColor: SkillColors.DARK_GREEN }
                ]
            },
            {
                label: "Engineering Development Program",
                type: ExperienceType.FULL_TIME,
                startDate: new Date('2024-06-01'),
                endDate: new Date('2025-06-01'),
                description: "Leveraged React, TypeScript, Express, MongoDB, and more to contribute to enterprise CI/CD pipeline and developer platform accounting for 70% of cloud deployments at Travelers, comprising 5000+ internal and external applications.",
                skills: [
                    { skill: "TypeScript", circleColor: SkillColors.BLUE },
                    { skill: "React", circleColor: SkillColors.PURPLE },
                    { skill: "MongoDB", circleColor: SkillColors.ORANGE },
                    { skill: "Node", circleColor: SkillColors.RED }
                ]
            },
            {
                label: "Software Engineer Intern",
                type: ExperienceType.FULL_TIME,
                startDate: new Date('2023-06-01'),
                endDate: new Date('2023-08-01'),
                description: "Developed a Python/Selenium application providing a suite of automated data gathering methods through a robust command line interface to streamline data gathering for the SOX application audit process.",
                skills: [
                    { skill: "Python", circleColor: SkillColors.YELLOW },
                    { skill: "Selenium", circleColor: SkillColors.DARK_GREEN },
                    { skill: "CLI", circleColor: SkillColors.STONE },
                    { skill: "MVC", circleColor: SkillColors.FOREST_GREEN }
                ]
            }
        ]
    },
    {
        title: "UConn College of Engineering",
        location: "Storrs, CT",
        experienceImg: "/university-of-connecticut-logo.png",
        experienceImgAlt: "University of Connecticut logo",
        experienceItems: [
            {
                label: "Undergraduate Teaching Assistant",
                type: ExperienceType.PART_TIME,
                startDate: new Date('2023-08-01'),
                endDate: new Date('2024-05-01'),
                description: "Promote student learning of Kotlin, Android SDK, and mobile development through weekly office hours and providing grades and feedback on assignments and exams.",
                skills: [
                    { skill: "Kotlin", circleColor: SkillColors.FOREST_GREEN },
                    { skill: "Android SDK", circleColor: SkillColors.DARK_BLUE },
                    { skill: "Mobile Development", circleColor: SkillColors.ORANGE },
                    { skill: "Teaching", circleColor: SkillColors.BLUE }
                ]
            }
        ]
    },
    {
        title: "Wellinks",
        location: "New Haven, CT",
        experienceImg: "/wellinks-logo.png",
        experienceImgAlt: "Wellinks logo",
        experienceItems: [
            {
                label: "Junior Software Engineer",
                type: ExperienceType.PART_TIME,
                startDate: new Date('2022-08-01'),
                endDate: new Date('2023-03-01'),
                description: "Android developer leveraging Kotlin, Android SDK, external REST APIs, Rollbar, and Mixpanel for new feature work and code maintenance, serving over 1,000 patients with COPD.",
                skills: [
                    { skill: "Kotlin", circleColor: SkillColors.FOREST_GREEN },
                    { skill: "Android SDK", circleColor: SkillColors.DARK_BLUE },
                    { skill: "Mobile Development", circleColor: SkillColors.ORANGE },
                ]
            },
            {
                label: "Software Engineering Intern",
                type: ExperienceType.FULL_TIME,
                startDate: new Date('2022-06-01'),
                endDate: new Date('2022-08-01'),
                description: "Led development for a proof of concept feature in the company's Android app using Kotlin and Android SDK, providing comprehensive environmental insights based on local weather metrics tailored to COPD wellness.",
                skills: [
                    { skill: "Kotlin", circleColor: SkillColors.FOREST_GREEN },
                    { skill: "Android SDK", circleColor: SkillColors.DARK_BLUE },
                    { skill: "Mobile Development", circleColor: SkillColors.ORANGE },
                ]
            },
        ]
    }
]

export default function WorkExperience() {
    return (
        <div className="flex flex-col lg:max-w-4xl md:max-w-xl mx-10 md:mx-auto my-10">
            {workExperiences.map((experience) => (
                <ExperienceDisplay key={experience.title} experience={experience} />
            ))}
        </div>
    )
}
