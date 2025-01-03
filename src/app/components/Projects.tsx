import Image from 'next/image';
import Link from 'next/link';
interface Iprops {
    src:string;
    alt:string;
    text:string;
    link?:string;
}

const ProjectCard = (props:Iprops ) => {
    const {src, alt, link} = props 
    return (
        <div className="relative group w-full max-w-xs">
            <Image
                src={src}
                alt={alt}
                width={400}
                height={150}
                className="w-full h-auto object-cover"
            />
         
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
            {link ? (
        <Link href={link}>
            <span className="text-white text-lg font-bold">View Project</span>
        </Link>
    ) : (
        <span className="text-white text-lg font-bold">No Link Provided</span>
    )}
          
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        { src: "/projects/greenHeaven.jpg", alt: "Green Heaven", text: "Project 1", link:"https://green-heaven-nextjs-dwbg3oeig-samiajaveds-projects.vercel.app" },
        { src: "/projects/figma  (1).jpg", alt: "Figma 1", text: "Project 2", link:"https://assignment-3-figma-lhmncrot4-samiajaveds-projects.vercel.app" },
        { src: "/projects/figma.jpg", alt: "Figma", text: "Project 3", link:"https://assignment2-figma-i0ap0xl8i-samiajaveds-projects.vercel.app" },
        { src: "/projects/figma (2).jpg", alt: "Figma 2", text: "Project 4", link:"https://lustrous-kitten-c5d8d9.netlify.app/" },
        { src: "/projects/figma.jpg", alt: "Figma", text: "Project 5", link:"https://hackhaton-milstone-3-bivklkhc0-samiajaveds-projects.vercel.app" },
    ];

    return (
        <div className="w-full  bg-white">
            <div className="grid gap-5 p-10 lg:p-32 ">
                <div className="lg:flex md:flex content-around justify-around m-2">
                    {projects.slice(0, 2).map((project, index) => (
                        <ProjectCard
                            key={index}
                            src={project.src}
                            alt={project.alt}
                            text={project.text}
                            link={project.link}
                        />
                    ))}
                </div>
                <div className="flex justify-around gap-2 ">
                    {projects.slice(2).map((project, index) => (
                        <ProjectCard
                            key={index}
                            src={project.src}
                            alt={project.alt}
                            text={project.text}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
