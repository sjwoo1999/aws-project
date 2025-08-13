import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Majorbot — AI 전공 Q&A 챗봇",
	description:
		"Majorbot helps students get course-specific answers fast with an AI teaching assistant.",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	viewportFit: "cover",
	themeColor: "#F76241",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body className={`${inter.variable} antialiased bg-slate-50 text-slate-900`}>
				{children}
			</body>
		</html>
	);
}
