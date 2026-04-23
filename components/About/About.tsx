import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import { MapPin } from "lucide-react"
import { CodeXmlIcon } from "lucide-react"

export default function About() {
    return (
        <div className="w-max mx-auto my-20">
            <div className="flex flex-row">
                <Image
                    src="/tyler-2024.png"
                    width={250}
                    height={250}
                    className="rounded-md m-3 max-h-250"
                    alt="Tyler in San Francisco in 2024"
                />
                <div className="flex flex-col">
                    <Card className="m-3 max-w-xl">
                        <CardHeader>
                            <CardTitle className="font-bold">Hello, I'm Tyler.</CardTitle>
                            <CardDescription>he/him/his</CardDescription>
                        </CardHeader>
                        <CardContent>
                            I'm a software engineer based in Hartford, CT. I graduated from UConn in 2024, and in my spare time I like to make music, run, and bowl.
                        </CardContent>
                    </Card>
                    <div className="flex flex-row">
                        <Card className="m-3">
                            <CardContent>
                                <MapPin size={20} className="inline mr-2" />
                                Hartford, CT
                            </CardContent>
                        </Card>
                        <Card className="m-3">
                            <CardContent>
                                <CodeXmlIcon size={20} className="inline mr-2" />
                                SWE @ Travelers
                            </CardContent>
                        </Card>
                        <Card className="m-3">
                            <CardContent>
                                Hartford, CT
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}