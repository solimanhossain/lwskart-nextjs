import {
    distinctUniqueCategory,
    aggregateCategoryCount,
} from "@/actions/product-action";
import Categories from "./drawerSidebar/Categories";
import Price from "./drawerSidebar/Price";
import Size from "./drawerSidebar/Size";

export default async function SideBar() {
    const totalSize = await distinctUniqueCategory("sizes");
    const totalCategory = await aggregateCategoryCount();

    return (
        <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hiddenb hidden md:block">
            <div className="divide-y divide-gray-200 space-y-5">
                <div>
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                        Categories
                    </h3>
                    <div className="space-y-2">
                        {totalCategory.map((category) => (
                            <Categories
                                key={category._id}
                                category={category._id}
                                count={category.count}
                            />
                        ))}
                    </div>
                </div>

                <div className="pt-4">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                        Price
                    </h3>

                    <Price />
                </div>

                <div className="pt-4">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                        size
                    </h3>
                    <div className="flex items-center gap-2">
                        {totalSize.map((size) => (
                            <Size key={size} size={size} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
