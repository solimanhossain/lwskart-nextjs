"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductImages({ thumbnail, images }) {
    const [productImg, setProductImg] = useState(thumbnail);

    function handleImageChange(img) {
        setProductImg(img);
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-[640px] h-[480px]">
                <Image
                    src={productImg}
                    alt="product"
                    className="h-full object-cover skeleton"
                    width={640}
                    height={480}
                />
            </div>

            <div className="flex gap-4 mt-4">
                <div className="w-[125px] h-[125px]">
                    <Image
                        src={thumbnail}
                        alt="product"
                        onClick={() => handleImageChange(thumbnail)}
                        className="object-cover w-full h-full cursor-pointer border border-primary skeleton"
                        width={480}
                        height={360}
                    />
                </div>
                {images?.map((image) => (
                    <div key={image} className="w-[125px] h-[125px]">
                        <Image
                            src={image}
                            alt="product"
                            onClick={() => handleImageChange(image)}
                            className="w-full cursor-pointer border border-primary skeleton"
                            width={480}
                            height={360}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
