import Link from "next/link";

export default function Banner({ languages }) {
    return (
        <div className="bg-cover bg-no-repeat bg-center py-36 bg-[url('/assets/images/banner-bg.jpg')] skeleton">
            <div className="container">
                <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
                    {languages?.banner?.title1} <br />{" "}
                    {languages?.banner?.title2}
                </h1>
                <p>{languages?.banner?.description}</p>
                <div className="mt-12">
                    <Link
                        href="/shop"
                        className="bg-primary border border-primary text-white px-8 py-3 font-medium 
                    rounded-md hover:bg-transparent hover:text-primary"
                    >
                        {languages?.banner?.shopNow}
                    </Link>
                </div>
            </div>
        </div>
    );
}
