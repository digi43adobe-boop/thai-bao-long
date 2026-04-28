import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "vietnamese"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Đạo diễn Thái Bảo Long | Chủ tịch Hiệp hội GR Ricoh Việt Nam",
  description: "Dấu ấn sự kiện Việt: Đạo diễn phim nghệ thuật Thái Bảo Long chinh phục khán giả quốc tế bằng góc nhìn khác biệt.",
  openGraph: {
    title: "Đạo diễn Thái Bảo Long | Góc nhìn khác biệt",
    description: "Khám phá hành trình nghệ thuật của Thái Bảo Long - đạo diễn phim nghệ thuật và Chủ tịch Hiệp hội GR Ricoh Việt Nam.",
    images: ["/hero-banner.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#050505] text-[#f5f5f5]">
        {children}
      </body>
    </html>
  );
}
