import About from "@/components/About/About";
import Name from "@/components/Name/Name";
import SectionDivider from "@/components/SectionDivider/SectionDivider";

export default function Home() {
  return (
    <>
      <Name />
      <SectionDivider sectionTitle="About Me" />
      <About />

      <SectionDivider sectionTitle="Work Experience" />
    </>
  )
}