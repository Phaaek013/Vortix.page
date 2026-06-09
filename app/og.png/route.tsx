import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0D0D12",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            right: "-60px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(61,217,160,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Logo mark — simplified spiral approximation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "2.5px solid #3DD9A0",
              opacity: 0.8,
            }}
          />
          <span
            style={{
              fontFamily: "sans-serif",
              fontSize: "22px",
              fontWeight: 600,
              color: "#F5F0E8",
              letterSpacing: "-0.02em",
            }}
          >
            Vortix
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "62px",
            fontWeight: 700,
            lineHeight: 1.04,
            letterSpacing: "-0.03em",
            color: "#F5F0E8",
            marginBottom: "24px",
            maxWidth: "780px",
          }}
        >
          Estudamos seu negócio.{" "}
          <span style={{ color: "#3DD9A0" }}>Desenhamos a solução certa.</span>
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "22px",
            color: "rgba(185,190,210,0.7)",
            lineHeight: 1.5,
            maxWidth: "600px",
          }}
        >
          Consultoria técnica em BI, Banco de Dados e Inteligência Artificial.
        </p>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
