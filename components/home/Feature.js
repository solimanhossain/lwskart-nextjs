import Image from "next/image";

export default function Feature({ languages }) {
    return (
        <div className="container py-16">
            <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
                <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                    <Image
                        src="/assets/icons/delivery-van.svg"
                        alt="Delivery"
                        className="w-12 h-12 object-contain"
                        width={48}
                        height={48}
                    />
                    <div>
                        <h4 className="font-medium capitalize text-lg">
                            {languages?.features?.freeShipping}
                        </h4>
                        <p className="text-gray-500 text-sm">
                            {languages?.features?.orderOver}
                        </p>
                    </div>
                </div>
                <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                    <Image
                        src="/assets/icons/money-back.svg"
                        alt="Delivery"
                        className="w-12 h-12 object-contain"
                        width={48}
                        height={48}
                    />
                    <div>
                        <h4 className="font-medium capitalize text-lg">
                            {languages?.features?.moneyReturns}
                        </h4>
                        <p className="text-gray-500 text-sm">
                            {languages?.features?.moneyReturnsDescription}
                        </p>
                    </div>
                </div>
                <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                    <Image
                        src="/assets/icons/service-hours.svg"
                        alt="Delivery"
                        className="w-12 h-12 object-contain"
                        width={48}
                        height={48}
                    />
                    <div>
                        <h4 className="font-medium capitalize text-lg">
                            {languages?.features?.support}
                        </h4>
                        <p className="text-gray-500 text-sm">
                            {languages?.features?.supportDescription}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
