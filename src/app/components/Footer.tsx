import Image from "next/image"
import Link from "next/link"

export default function Footer (){
    return (
        <div>

            <div className="lg:h-[200px] h-[100px] md:w-[768px] lg:w-full w-[375px] bg-gradient-to-r from-emerald-400/50 via-teal-300/50 to-lime-200/50">
                <div className="lg:pt-14">
                    <Link href="/" className="flex items-center justify-center">
                        <Image src={"/images/arrow.png"} alt="" width={80} height={80} /> 
                    </Link>
                </div> 
            </div>
            <div className="bg-emerald-100 flex items-center justify-center ">
                <p className="text-sm ">@2024 portfolio by Samia Javed.</p>
            </div>
        </div>
    )
}