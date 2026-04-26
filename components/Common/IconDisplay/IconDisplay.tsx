import Link from "next/link";

type IconDiplayProps = {
    clickable?: boolean;
    link?: string;
    icon: React.ReactNode;
}

export default function IconDisplay({ clickable, link, icon }: IconDiplayProps) {
    return (
        <>
            {clickable && link ? (
                <Link href={link} target="_blank">
                    <div className="border rounded-md hover:bg-muted">
                        {icon}
                    </div>
                </Link>
            ) : (
                <div className="text-muted-foreground">
                    {icon}
                </div>
            )}
        </>
    );
}