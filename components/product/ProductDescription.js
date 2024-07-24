export default function ProductDescription({ description, details }) {
    // console.log(description);

    return (
        <div className="container pb-16 p-6 text-gray-800 ">
            <h3 className="border-b border-gray-200 font-roboto text-xl font-medium">
                {details}
            </h3>
            <div className="w-3/5">
                {Object.keys(description)?.map((desKey) => (
                    <p key={desKey}>
                        <span className="uppercase pr-1">{desKey}:</span>
                        <span className="text-gray-600">
                            {description[desKey]}
                        </span>
                    </p>
                ))}
            </div>
        </div>
    );
}
