import Image from "next/image"
import Link from "next/link"

export default function Footer (){
    return (
        <div>

            <div className="lg:h-[200px] h-[100px] md:w-[768px] lg:w-full w-[375px] bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50">
                <div className="lg:pt-14">
                    <Link href="/" className="flex items-center justify-center">
                        <Image src={"/images/arrow.png"} alt="" width={80} height={80} /> 
                    </Link>
                </div> 
            </div>
            <div className="bg-white flex items-center justify-center ">
                <p className="text-sm ">@2024 portfolio by Samia Javed.</p>
            </div>
        </div>
    )
}