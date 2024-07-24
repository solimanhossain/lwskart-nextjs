import Link from "next/link";

export default function BreadCrumb({ name = "" }) {
    return (
        <div className="container py-4 flex items-center gap-3">
            <Link href="/" className="text-primary text-base">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
                    ></path>
                </svg>
            </Link>
            <span className="text-sm text-gray-400">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 28 28"
                >
                    <path
                        fill="currentColor"
                        d="M9.97 4.22a.75.75 0 0 1 1.06 0l8.75 8.75a.75.75 0 0 1 0 1.06l-8.75 8.75a.75.75 0 1 1-1.06-1.06l8.22-8.22l-8.22-8.22a.75.75 0 0 1 0-1.06"
                    ></path>
                </svg>
            </span>
            <p className="text-gray-600 font-medium">{name}</p>
        </div>
    );
}
