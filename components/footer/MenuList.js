import Link from "next/link";

function ListofLink({ children }) {
    return (
        <Link
            href="#"
            className="text-base text-gray-500 hover:text-gray-900 block"
        >
            {children}
        </Link>
    );
}

export default function MenuList({ wow, lang }) {
    // console.log(lang);

    return (
        <div className="mt-4 space-y-4">
            {wow ? (
                <>
                    <ListofLink>{lang?.marketing}</ListofLink>
                    <ListofLink>{lang?.analytics}</ListofLink>
                    <ListofLink>{lang?.commerce}</ListofLink>
                    <ListofLink>{lang?.insights}</ListofLink>
                </>
            ) : (
                <>
                    <ListofLink>{lang?.documentation}</ListofLink>
                    <ListofLink>{lang?.apiStatus}</ListofLink>
                    <ListofLink>{lang?.guides}</ListofLink>
                </>
            )}
        </div>
    );
}
