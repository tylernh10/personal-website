import { SkillColors } from "@/lib/SkillColors"
import ProjectCard, { ProjectInfo, ProjectStatus } from "./ProjectCard"

const projectItems: ProjectInfo[] = [
    {
        title: "Personal Website",
        description: "The website you are currently on. It uses Next.js, Tailwind, and Shadcn.",
        status: ProjectStatus.IN_PROGRESS,
        skills: [
            { skill: "Next.js", circleColor: SkillColors.BLUE },
            { skill: "Tailwind", circleColor: SkillColors.DARK_GREEN },
            { skill: "Shadcn", circleColor: SkillColors.ORANGE },
            { skill: "Vercel", circleColor: SkillColors.PURPLE },
        ],
        gitHubLink: "https://github.com/tylernh10/personal-website",
        externalLink: "https://tylerhinrichs.com"
    },
    {
        title: "Admin Web Scheduler",
        description: "A web application for administrative scheduling using the genetic algorithm.",
        status: ProjectStatus.COMPLETE,
        skills: [
            { skill: "React", circleColor: SkillColors.DARK_BLUE },
            { skill: "Python Flask", circleColor: SkillColors.YELLOW },
            { skill: "MySQL", circleColor: SkillColors.FOREST_GREEN }
        ],
        gitHubLink: "https://github.com/tylernh10/admin-web-scheduler",
        externalLink: "https://digitalcommons.lib.uconn.edu/srhonors_theses/986/"
    },
    {
        title: "Nitro Type Bot",
        description: "Python typing bot for Nitro Type made with Selenium and CustomTkinter.",
        status: ProjectStatus.COMPLETE,
        skills: [
            { skill: "Python", circleColor: SkillColors.TEAL },
            { skill: "CustomTkinter", circleColor: SkillColors.YELLOW },
            { skill: "MySQL", circleColor: SkillColors.BLUE }
        ],
        gitHubLink: "https://github.com/tylernh10/nitro-bot",
    },
    {
        title: "Graphical Editor",
        description: "Graphical editor made with C++ and Allegro5.",
        status: ProjectStatus.COMPLETE,
        skills: [
            { skill: "C++", circleColor: SkillColors.PURPLE },
            { skill: "Allegro5", circleColor: SkillColors.LIME },
            { skill: "MVC", circleColor: SkillColors.SALMON }
        ],
        gitHubLink: "https://github.com/tylernh10/nitro-bot",
    },
]

export default function Projects() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-6 lg:max-w-4xl md:max-w-xl mx-auto my-10 px-6">
            {projectItems.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    )
}
