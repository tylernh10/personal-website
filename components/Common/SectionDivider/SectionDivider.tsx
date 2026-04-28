type SectionDividerProps = {
    sectionTitle: string;
    id: string;
}

export default function SectionDivider({ sectionTitle, id }: SectionDividerProps) {
    return (
        <div id={id} className="lg:max-w-4xl md:max-w-xl mx-10 md:mx-auto my-10">
            <div className="text-2xl font-bold">{sectionTitle}</div>
            <div className="h-px w-full bg-border"/>
        </div>
    )
}
