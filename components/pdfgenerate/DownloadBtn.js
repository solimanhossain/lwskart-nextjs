"use client";

import { useRouter } from "next/navigation";
import { compile } from "@fileforge/react-print";
import { Onedoc } from "@onedoc/client";
import PdfPage from "./PdfPage";

export default function DownloadBtn({ invoice = {} }) {
    const route = useRouter();
    // console.log(invoice);
    if (!invoice) return null;

    async function generateInvoicePdf() {
        const html = <PdfPage invoice={invoice} />;
        const onedoc = new Onedoc(process.env.NEXT_PUBLIC_ONEDOC_API_KEY);

        const { link, file, error, info } = await onedoc.render({
            html: await compile(html),
            save: true,
            expiresIn: 1,
        });

        route.push(link);
    }

    return (
        <button
            onClick={generateInvoicePdf}
            className="py-2 px-4 border border-primary text-primary rounded-sm hover:shadow-lg"
        >
            Download Invoice
        </button>
    );
}
