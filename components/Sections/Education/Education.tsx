import ExperienceDisplay, { Experience, ExperienceType } from "@/components/Common/ExperienceDisplay/ExperienceDisplay"
import { SkillColors } from "@/lib/SkillColors"

const educationItems: Experience[] = [
    {
        title: "University of Connecticut",
        location: "Storrs, CT",
        experienceImg: "/university-of-connecticut-logo.png",
        experienceImgAlt: "University of Connecticut logo",
        experienceItems: [
            {
                label: "Bachelor of Science in Computer Science",
                type: ExperienceType.FULL_TIME,
                startDate: new Date('2020-08-01'),
                endDate: new Date('2024-05-01'),
                description: "I earned a B.S. in Computer Science alongside a minor in Mathematics and graduated Summa Cum Laude with a 4.0 GPA. During my time at UConn, I was a TA for CSE 3200 (Mobile Application Development) and I was a member of the UConn Data Science Club and the Honors Program.",
                skills: [
                    { skill: "Python", circleColor: SkillColors.YELLOW },
                    { skill: "OOP", circleColor: SkillColors.ORANGE },
                    { skill: "Kotlin", circleColor: SkillColors.DARK_BLUE },
                    { skill: "C++", circleColor: SkillColors.LIME },
                    { skill: "Java", circleColor: SkillColors.RED }
                ]
            },
        ]
    },
]

export default function Education() {
    return (
        <div className="flex flex-col lg:max-w-4xl md:max-w-xl mx-10 md:mx-auto my-10">
            {educationItems.map((item) => (
                <ExperienceDisplay key={item.title} experience={item} />
            ))}
        </div>
    )
}
