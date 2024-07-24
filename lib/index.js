import { searchQuaryFinder } from "@/actions/product-action";

async function getParamsData(searchParams) {
    let { search, sizes, priceMin, priceMax, category } = searchParams;
    if (sizes) sizes = sizes.toUpperCase();
    let queryObj = {};

    if (!sizes && !priceMin && !priceMax && category) {
        queryObj = { category };
    } else if (sizes && !priceMin && !priceMax && !category) {
        queryObj = { sizes };
    } else if (!sizes && !priceMin && priceMax && !category) {
        queryObj = { price: { $lte: priceMax } };
    } else if (!sizes && priceMin && !priceMax && !category) {
        queryObj = { price: { $gte: priceMin } };
    } else if (!sizes && priceMin && priceMax && !category) {
        queryObj = { price: { $gte: priceMin, $lte: priceMax } };
    } else if (sizes && !priceMin && !priceMax && category) {
        queryObj = { sizes, category };
    } else if (sizes && priceMin && priceMax && !category) {
        queryObj = { sizes, price: { $gte: priceMin, $lte: priceMax } };
    } else if (!sizes && priceMin && priceMax && category) {
        queryObj = {
            price: { $gte: priceMin, $lte: priceMax },
            category,
        };
    } else if (sizes && priceMin && priceMax && category) {
        queryObj = {
            sizes,
            price: { $gte: priceMin, $lte: priceMax },
            category,
        };
    }

    if (search)
        queryObj = {
            ...queryObj,
            name: { $regex: search, $options: "i" },
            description: { $regex: search, $options: "i" },
        };

    return searchQuaryFinder(queryObj);
}

export { getParamsData };
