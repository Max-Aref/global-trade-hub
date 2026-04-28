import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { ImageResponse } from "next/og";

// Match header icon styling
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "transparent",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#8c45ff", // Match header icon color
        }}
      >
        {/* Using the same LiaGlobeAmericasSolid icon as in the header */}
        <LiaGlobeAmericasSolid
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
