import Image from "next/image";

type Props={
    src:string
    alt:string
    priority?:string
}

export default function CustomImage({src,alt,priority}:Props){
    const prty=priority?true:false

    return(
        <div className="w-full h-full py-7">
            <Image className="rounded-lg mx-auto" src={`https://raw.githubusercontent.com/SafiriyuRaphael/supreme-waffle/main/${src}`} alt={alt} width={850} height={650} priority={prty}/>
        </div>
    )
}