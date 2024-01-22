import { config } from "@/helpers/config";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: {
		template: `%s | ${config.project.name}`,
		default: config.project.name, // a default is required when creating a template
	},
	description: config.project.description,
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
