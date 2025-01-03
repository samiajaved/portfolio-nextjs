import Link from "next/link";
import Image from "next/image";

export default function Contact (){
    return(
    <div>
        <div className=" w-[375px] md:w-[768px] bg-white lg:w-full"> 
            <div className="text-center p-20 lg:px-44 lg:pb-10">
                <h1 className="text-3xl font-sans">Samia Javed Front-end Developer.</h1>
                <p className="mt-6 text-sm">I started my journey of being an AI Engineer in february 2024 in GIAIC, before that i was working in the field of 
                    fine arts, when i join tech field it was a bit difficult for me to learn without any mentor or even any guidence.
                but as the time went by, each day was challenging for me but i have not given up till now and InshaAllah 
                    i will cross the finish line.  
                </p>
            </div>

            <div className="w-fit flex   lg:ml-[610px] ml-[140px] md:ml-[300px] lg:-mt-7 -mt-10 ">
                        <Link href='https://www.linkedin.com/in/samia-javed-samia?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                            <Image src={"/images/linkedin.png"} alt="logo" width={25} height={18} className="w-auto h-auto " />
                        </Link>
                        <Link href="mailto:samiaj380@gmail.com">
                            <Image src={"/images/email.png"} alt="mail" width={25} height={18} className="w-auto h-auto ml-[30px] lg:ml-[30px]  "/>
                        </Link>
            </div>

            <h1 className="text-3xl font-sans text-center flex mt-6  justify-center ">Let&apos;s Work Together</h1>

            <div>
                        <form className=" md:ml-52 ml-8 lg:ml-[400px] mt-10 lg:w-[530px] md:w-[380px] lg:h-[700px] h-[600px]" id="form" name="form" >
                                <h1 className="my-4 font-medium text-base  ">  First Name</h1>
                                <input placeholder="abc" id="firstName" className="lg:w-[528px] lg:h-[60px] h-[50px] w-[300px] rounded-[10px] pl-4 border"/>
                                <h1 className="my-4 font-medium text-base "> Last Name  </h1>
                                <input placeholder="abc" id="secondName" className="lg:w-[528px] lg:h-[60px] h-[50px] w-[300px]  rounded-[10px] pl-4 border"/>
                                <h1 className="my-4 font-medium text-base ">Email </h1>
                                <input placeholder="abc@gmail.com" id="email" name="email" autoComplete="on" className="lg:w-[528px] lg:h-[60px] h-[50px] w-[300px]  rounded-[10px] pl-4 border"/>
                                <h1 className="my-4 font-medium text-base"> Message</h1>
                                <textarea placeholder="Hi! i'd like to ask about" id="message" name="message" className="lg:w-[528px] lg:h-[120px] h-[80px] w-[300px]  pl-4 rounded-[10px] border"></textarea>
                                <button type="button" className='bg-purple-500  hover:bg-purple-400  text-white pt-2  px-7  py-2  rounded-[5px] mt-7    w-[237px] h-[52px] '>Submit </button>

                            </form>
                        </div>
        </div>
    </div>
    )
}


