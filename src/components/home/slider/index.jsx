import slides from "@/helpers/data/slider.json";
import Image from "next/image";
import "./sliders.scss";

const Slider = () => {
	return (
		<div id="slider" className="carousel slide main-slider">
			<div className="carousel-indicators">
				{slides.map((item, index) => (
					<button
						key={item.id}
						type="button"
						data-bs-target="#slider"
						data-bs-slide-to={index}
						className={index === 0 ? "active" : ""}
						aria-current={index === 0}
						aria-label={`Slide ${index + 1}`}
					></button>
				))}
			</div>
			<div className="carousel-inner">
				{slides.map((item, index) => (
					<div
						key={item.id}
						className={`carousel-item ${
							index === 0 ? "active" : ""
						}`}
					>
						<Image
							src={`/images/slider/${item.image}`}
							className="d-block w-100"
							alt={item.title}
							width={1800}
							height={800}
						/>
						<div className="carousel-caption d-none d-md-block">
							<h5>{item.title}</h5>
							<p>{item.desc}</p>
						</div>
					</div>
				))}
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#slider"
				data-bs-slide="prev"
			>
				<span
					className="carousel-control-prev-icon"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#slider"
				data-bs-slide="next"
			>
				<span
					className="carousel-control-next-icon"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default Slider;
