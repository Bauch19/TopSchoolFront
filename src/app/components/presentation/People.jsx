import Image from "next/image"

export default function People({src, name, lastName, ...res}){
    return(
        <div className="w-fit h-fit relative flex flex-col justify-center items-center gap-2" {...res}>
            <div className="rounded-full w-[300px] h-[300px] overflow-hidden">
                <Image 
                    src={src}
                    width={200}
                    height={307}
                    priority
                    unoptimized
                    className="w-full h-fit object-cover"
                />
            </div>
            <p className="text-white font-[200] text-[16px] lg:text-[20px] text-center">
                <strong className="block font-bold">{name}</strong> {lastName}
            </p>
        </div>
    )
}