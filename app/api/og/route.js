import { ImageResponse } from "next/og";

const ogImg = `${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/cover.png`;

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    backgroundImage: `url(${ogImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                }}
            >
                LWSKart
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
