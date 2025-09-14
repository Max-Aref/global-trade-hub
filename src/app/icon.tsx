import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { ImageResponse } from "next/og";

// Define brand colors
const BRAND_PRIMARY = "#8c45ff"; // Purple brand color
const BRAND_BG = "#190d2e"; // Dark background

// Define icon sizes
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
          background: BRAND_BG,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
          border: `1px solid ${BRAND_PRIMARY}40`, // 40 = 25% opacity
        }}
      >
        {/* Using the same LiaGlobeAmericasSolid icon as in the header */}
        <LiaGlobeAmericasSolid
          style={{
            color: BRAND_PRIMARY,
            width: "70%",
            height: "70%",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
