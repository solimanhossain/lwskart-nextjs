export default function PdfPage({ invoice }) {
    const date = new Date();

    // console.log(invoice);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            {/* <PageTop> */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <div
                    style={{
                        textAlign: "left",
                        fontSize: "0.875rem",
                        lineHeight: "1.25rem",
                        color: "#9ca3af",
                    }}
                >
                    <div
                        style={{
                            fontSize: "1.25rem",
                            lineHeight: "1.75rem",
                            color: "#374151",
                        }}
                    >
                        User Details
                    </div>
                    <div>Name: {invoice?.user?.name}</div>
                    <div>Email: {invoice?.user?.email}</div>
                    <div>Phone: {invoice?.user?.phone}</div>
                    <div>Address: {invoice?.user?.address}</div>
                </div>
                <div
                    style={{
                        fontSize: "0.875rem",
                        lineHeight: "1.25rem",
                        textAlign: "right",
                        color: "#374151",
                    }}
                >
                    <div
                        style={{
                            fontSize: "1.25rem",
                            lineHeight: "1.75rem",
                        }}
                    >
                        LWSKart
                    </div>
                    <div>{date.toDateString()}</div>
                    <div>Invoice</div>
                </div>
            </div>
            <br />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <div
                    style={{
                        fontSize: "1.25rem",
                        lineHeight: "1.75rem",
                        textAlign: "center",
                    }}
                >
                    ORDER SUMMERY
                </div>

                <div>
                    <div
                        style={{
                            display: "flex",
                            padding: "0.25rem",
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            gap: "4rem",
                            justifyContent: "space-between",
                            borderWidth: "1px",
                            fontWeight: "700",
                        }}
                    >
                        <div
                            style={{
                                flex: "1 1 0%",
                            }}
                        >
                            Product Name
                        </div>
                        <div style={{ paddingRight: "2rem" }}>Price</div>
                        <div style={{ paddingRight: "1rem" }}>Quantity</div>
                        <div style={{ paddingRight: "1rem" }}>Total</div>
                    </div>
                    {invoice?.products?.map((product, index) => (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                padding: "0.25rem",
                                paddingLeft: "1rem",
                                paddingRight: "1rem",
                                gap: "4rem",
                                justifyContent: "space-between",
                                borderWidth: "1px",
                            }}
                        >
                            <div
                                style={{
                                    flex: "1 1 0%",
                                }}
                            >
                                {product?.name}
                            </div>
                            <div style={{ paddingRight: "3.5rem" }}>
                                ${product?.price}
                            </div>
                            <div style={{ paddingRight: "2rem" }}>
                                {product?.quantity}
                            </div>
                            <div style={{ paddingRight: "1rem" }}>
                                ${product?.price * product?.quantity}
                            </div>
                        </div>
                    ))}
                    <div
                        className="text-right font-bold"
                        style={{
                            fontWeight: "700",
                            textAlign: "right",
                            marginRight: "2rem",
                        }}
                    >
                        <span style={{ paddingRight: "2rem" }}>
                            Total Price :
                        </span>
                        <span>${invoice?.totalCost}</span>
                    </div>
                </div>
            </div>
            <br />
            <div style={{ textAlign: "center" }}>Thank you for your order!</div>
        </div>
    );
}
