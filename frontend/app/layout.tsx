import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ReRecipe",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja" data-theme="bumblebee">
			<body className={inter.className}>
				<div className="navbar bg-base-100 bg-opacity-90 sticky top-0 z-30">
					<div className="flex-1">
						<Link href="/" className="btn text-xl btn-primary">
							ReRecipe
						</Link>
					</div>
					<div className="flex-none">
						<label className="flex cursor-pointer gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<title>Toggle light/dark theme</title>
								<circle cx="12" cy="12" r="5" />
								<path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
							</svg>
							<input
								type="checkbox"
								value="night"
								className="toggle theme-controller"
							/>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<title>Toggle light/dark theme</title>
								<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
							</svg>
						</label>
					</div>
				</div>
				<div className="flex min-h-screen justify-center">
					<div className="flex flex-col items-center justify-between p-12 w-full lg:w-[1024px]">
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
