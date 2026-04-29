import Link from "next/link"

export default function Footer() {
    return (
        <div className="w-fit mx-auto flex flex-col justify-center items-center p-4 mb-2 text-muted-foreground">
            <Link href="https://github.com/tylernh10/personal-website/releases" target="_blank">v2.0.0</Link>
            <div>© {new Date().getFullYear()} Tyler Hinrichs</div>
        </div>
    )
}
