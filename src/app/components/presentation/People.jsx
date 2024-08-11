import Image from "next/image"

export default function People({src, name, lastName, ...res}){
    return(
        <div className="w-[240px] relative flex justify-center items-end" {...res}>
            <Image 
                src={src}
                width={200}
                height={307}
                className="w-fit h-fit object-cover"
            />
            <p className="text-white absolute font-[200] text-sm top-1/4 right-0">
                <b className="font-bold block">{name}</b> {lastName}
            </p>
        </div>
    )
}