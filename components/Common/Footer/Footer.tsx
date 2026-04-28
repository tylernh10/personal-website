export default function Footer() {
    return (
        <div className="w-fit mx-auto flex flex-col justify-center items-center p-4 mb-2 text-muted-foreground">
            <div>v2.0.0</div>
            <div>© {new Date().getFullYear()} Tyler Hinrichs</div>
        </div>
    )
}
