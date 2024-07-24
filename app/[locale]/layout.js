import CopyRight from "@/components/footer/CopyRight";
import FooterBar from "@/components/footer/FooterBar";
import HeaderBar from "@/components/header/HeaderBar";
import NavBar from "@/components/header/NavBar";

export default function Layout({ children, params: { locale } }) {
    return (
        <>
            <HeaderBar locale={locale} />
            <NavBar locale={locale} />

            {children}

            <FooterBar locale={locale} />
            <CopyRight locale={locale} />
        </>
    );
}
