import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { ImageResponse } from "next/og";

export const size = {
  width: 48,
  height: 48,
};

export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "#8c45ff",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
        }}
      >
        <LiaGlobeAmericasSolid
          style={{ color: "white", width: "32px", height: "32px" }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
