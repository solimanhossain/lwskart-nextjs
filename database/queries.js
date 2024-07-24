import { addToCart, addToWishlist } from "@/actions/connected-action";

async function setCartWishlist(userId) {
    const productIdWishlist = window.localStorage.getItem("lwsKart-wishlist");
    const productIdCart = window.localStorage.getItem("lwsKart-cart");

    if (productIdWishlist) {
        await addToWishlist(userId, productIdWishlist);
        window.localStorage.removeItem("lwsKart-cart");
    } else if (productIdCart) {
        await addToCart(userId, productIdCart);
        window.localStorage.removeItem("lwsKart-cart");
    }
}

export { setCartWishlist };
