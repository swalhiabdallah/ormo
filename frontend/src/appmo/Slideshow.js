import React, { useEffect, useState } from "react";

const Slideshow = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = [
		{
			id: 1,
			title: "Slide 1",
			content: "This is the content for slide 1",
			image: "/img/slide/banner_1.jpg",
		},
		{
			id: 2,
			title: "Slide 2",
			content: "This is the content for slide 2",
			image: "/img/slide/banner_2.jpg",
		},
		{
			id: 3,
			title: "Slide 3",
			content: "This is the content for slide 3",
			image: "/img/slide/banner_3.jpg",
		},
	];

	const handleSlideChange = (index) => {
		setCurrentSlide(index);
	};

	// const nextSlide = () => {
	// 	const newIndex = (currentSlide + 1) % slides.length;
	// 	setCurrentSlide(newIndex);
	// };

	// useEffect(() => {
	// 	const timeout = setTimeout(() => {
	// 		nextSlide();
	// 	}, 5000);
	// 	return () => clearTimeout(timeout);
	// }, [currentSlide, nextSlide]);

	useEffect(() => {
		const nextSlide = () => {
			const newIndex = (currentSlide + 1) % slides.length;
			setCurrentSlide(newIndex);
		};

		const timeout = setTimeout(() => {
			nextSlide();
		}, 5000);
		return () => clearTimeout(timeout);
	}, [currentSlide, slides.length]);

	return (
		<>
			<div className="slideshow">
				<div className="slideshow__slides">
					{slides.map((slide, index) => (
						<div key={slide.id} className={`slideshow__slide ${index === currentSlide ? "active" : ""}`}>
							<img src={slide.image} alt={slide.title} />
							{/* <h2>{slide.title}</h2>
						<p>{slide.content}</p> */}
						</div>
					))}
				</div>
				<div className="bullet">
					<div className="slideshow__bullets">
						{slides.map((slide, index) => (
							<button key={slide.id} className={`slideshow__bullet ${index === currentSlide ? "active" : ""}`} onClick={() => handleSlideChange(index)} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Slideshow;
