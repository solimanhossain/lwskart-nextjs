import Image from "next/image";

export default function Ads() {
    return (
        <div className="container pb-16">
            <a href="#">
                <Image
                    src="/assets/images/offer.jpg"
                    alt="ads"
                    className="w-full skeleton"
                    width={1920}
                    height={1080}
                />
            </a>
        </div>
    );
}
