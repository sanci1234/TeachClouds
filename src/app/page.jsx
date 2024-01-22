import { config } from "@/helpers/config";

export const metadata = {
	title: config.project.slogan,
};

export default function Home() {
	return (
		<div>
			<div class="alert alert-secondary">Hello</div>
		</div>
	);
}
