import React from 'react'
import Image from "next/image"

const Contact = ({ src, name}) => {
    return (
        <div className="flex items-center space-x mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
            <Image 
               className="rounded-full"
               objectFit="cover"
               src={src}
               width={50}
               height={50}
               layout='fixed'
            />

            <p className="text-black font-semibold pl-3">{name}</p>
            <div className="absolute bottom-2 left-10 bg-green-400 h-3 w-3 rounded-full animate-bounce"></div>
        </div>
    )
}

export default Contact
