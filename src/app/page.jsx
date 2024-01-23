import Slider from "@/components/home/slider";
import { config } from "@/helpers/config";

export const metadata = {
	title: config.project.slogan,
};

export default function HomePage() {
	return (
		<>
			<Slider />
		</>
	);
}
