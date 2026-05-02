import Link from "next/link";

type IconDiplayProps = {
    clickable?: boolean;
    link?: string;
    border?: boolean; // note: clickable always has a border, but this allows for a border on non-clickable icons
    icon: React.ReactNode;
}

export default function IconDisplay({ clickable, link, border, icon }: IconDiplayProps) {
    return (
        <>
            {clickable && link ? (
                <Link href={link || ''} target="_blank">
                    <div className="border rounded-md hover:bg-muted transition-all duration-200 ease-in-out">
                        {icon}
                    </div>
                </Link>
            ) : (
                <div className={`${border ? 'border rounded-md' : ''} text-muted-foreground`}>
                    {icon}
                </div>
            )}
        </>
    );
}
