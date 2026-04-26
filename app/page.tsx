import About from "@/components/Sections/About/About";
import Name from "@/components/Sections/Name/Name";
import SectionDivider from "@/components/Common/SectionDivider/SectionDivider";
import WorkExperience from "@/components/Sections/WorkExperience/WorkExperience";

export default function Home() {
  return (
    <>
      <Name />
      
      <SectionDivider sectionTitle="About Me" />
      <About />

      <SectionDivider sectionTitle="Work Experience" />
      <WorkExperience />
    </>
  )
}