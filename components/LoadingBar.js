export default function LoadingBar() {
    return (
        <div className="w-full flex justify-center items-center gap-16">
            <div className="w-5 h-5  bg-blue-500 rounded-full animate-ping [animation-delay:-0.12s]"></div>
            <div className="w-5 h-5  bg-green-500 rounded-full animate-ping [animation-delay:-0.9s]"></div>
            <div className="w-5 h-5  bg-yellow-500 rounded-full animate-ping [animation-delay:-0.6s]"></div>
            <div className="w-5 h-5  bg-red-500 rounded-full animate-ping [animation-delay:-0.3s]"></div>
        </div>
    );
}
