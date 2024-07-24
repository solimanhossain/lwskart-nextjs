import BreadCrumb from "@/components/BreadCrumb";
import ProductImages from "@/components/product/ProductImages";
import ProductDetails from "@/components/product/ProductDetails";
import ProductDescription from "@/components/product/ProductDescription";
import { getSingleProduct } from "@/actions/product-action";
import RelatedProduct from "@/components/shop/RelatedProduct";
import LoadingBar from "@/components/LoadingBar";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getLang } from "@/app/lang/lang";

export async function generateMetadata({ params: { productId } }) {
    const product = await getSingleProduct(productId);

    return {
        title: `${product?.name} | LWSKart`,
        description: product?.description?.slice(0, 100),
        openGraph: {
            images: [product?.image[0]],
        },
    };
}

export default async function ProductPage({ params: { productId, locale } }) {
    const product = await getSingleProduct(productId);
    if (!product) notFound();

    const languages = await getLang(locale);

    const { thumbnail, image, details, category } = product;

    // console.log(languages?.product);

    return (
        <main>
            <BreadCrumb name={languages?.product?.title} />
            <div className="container flex gap-6">
                <ProductImages images={image} thumbnail={thumbnail} />
                <ProductDetails product={product} lang={languages?.product} />
            </div>
            <ProductDescription
                description={details}
                details={languages?.product?.details}
            />

            <div className="container pb-16">
                <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
                    {languages?.product?.relatedProduct}
                </h2>
                <Suspense fallback={<LoadingBar />}>
                    <RelatedProduct category={category} locale={locale} />
                </Suspense>
            </div>
        </main>
    );
}
