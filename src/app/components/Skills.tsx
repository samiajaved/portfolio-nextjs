import Image from "next/image"
export default function Skills (){
    return (
        <div>
            <div className="h-fit lg:w-full w-[375px] md:w-[768px]  lg:py-20 lg:px-40 py-10 px-2 md:py-10 md:px-16 bg-gradient-to-r from-emerald-400/50 via-teal-300/50 to-lime-200/50">
                <div className="">

                    <main className="flex justify-between ">
                        <Image src={"/skills/html.png"} alt="html" width={50} height={50} className="lg:w-auto  "/>
                        <Image src={"/skills/css.png"} alt="css" width={50} height={50} className="lg:w-auto "/>
                        <Image src={"/skills/typescript.png"} alt="typescript" width={50} height={50} className="lg:w-auto  "/>
                        <Image src={"/skills/nextjs.png"} alt="nextjs" width={50} height={50} className="lg:w-auto "/>
                        <Image src={"/skills/python.png"} alt="python" width={50} height={50} className="lg:w-auto"/>
                    </main>

                </div>
            </div>
        </div>
    )
}