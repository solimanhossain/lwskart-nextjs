function changeObjIdtoString(obj) {
    return {
        name: obj?.name,
        email: obj?.email,
        phone: obj?.phone,
        image: obj?.image,
        _id: obj?._id.toString(),
    };
}

export { changeObjIdtoString };
