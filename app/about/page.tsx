import Link from "next/link";
import "./page.css";
import Image from "next/image";

export default function AboutPage()
{
    return (
        <div className="about">
            <h1>
                هذا الموقع صنع بواسطة طالب مدرسة أبو العز الحريري بنين (كاراس نعيم)
            </h1>
            <Image src="logo.svg" alt="صورة المشروع" style={{
                filter:"invert()"
            }} width={200} height={200}/>
            <p>
                مستودع المشروع: <Link href="https://github.com/karas-naeem/arabic-grammar-game" style={{
                    textDecoration:"underline",
                    color:"var(--foreground)"
                }}>رابط مستودع المشروع</Link>
            </p>
        </div>
    )
}