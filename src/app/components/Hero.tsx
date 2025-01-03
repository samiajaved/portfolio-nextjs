import Image from "next/image";

export default function about(){
    return(
        <div >
            <div className="fixed z-[-1] lg:w-[100vw] w-[100vw] h-[100vh] md:w-[768px] " >
            <Image src={"/images/bg Laptop.jpg"} alt=" background image" fill style={{ objectFit: 'cover' }}/>   
            </div>


            
            <div className=" h-[800px] lg:w-full w-[375px] md:w-[768px] bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50">
                <div className="md:text-center text-center pt-[200px]">
                    <h1 className=" text-9xl md:text-[180px] lg:text-[200px] font-serif">Hello;</h1>
                    <h1 className="font-serif text-3xl md:mt-4">I am samia javed. front-end Developer.</h1>
                    <div className="flex items-center justify-center">
                     <Image src={"/images/down.png"} style={{width:"auto", height:"auto"}}  alt="go down icon" width={50} height={50} className="  lg:mt-8 md:mt-8 mt-4"/>  
                    </div>
                </div>
            </div>
        </div>

    )
}