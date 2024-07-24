"use client";

import {
    FacebookShareButton,
    FacebookIcon,
    InstapaperShareButton,
    InstagramIcon,
    LinkedinShareButton,
    LinkedinIcon,
} from "next-share";
import { usePathname } from "next/navigation";

export default function ShareSocialMedia() {
    const path = usePathname();
    const currentUrl = `${process.env.NEXT_PUBLIC_BASE_URL + path}`;

    return (
        <>
            <FacebookShareButton url={currentUrl}>
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <InstapaperShareButton url={currentUrl}>
                <InstagramIcon size={32} round />
            </InstapaperShareButton>
            <LinkedinShareButton url={currentUrl}>
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
        </>
    );
}
