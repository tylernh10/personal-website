import About from "@/components/Sections/About/About";
import Name from "@/components/Sections/Name/Name";
import SectionDivider from "@/components/Common/SectionDivider/SectionDivider";
import WorkExperience from "@/components/Sections/WorkExperience/WorkExperience";
import Education from "@/components/Sections/Education/Education";
import Projects from "@/components/Sections/Projects/Projects";

export default function Home() {
  return (
    <>
      <Name />
      
      <About />

      <SectionDivider sectionTitle="Work Experience" id="work" />
      <WorkExperience />

      <SectionDivider sectionTitle="Projects" id="projects" />
      <Projects />

      <SectionDivider sectionTitle="Education" id="education" />
      <Education />
    </>
  )
}
