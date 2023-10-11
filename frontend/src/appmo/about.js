// import React from "react";

// const AboutUs = () => {
// 	return (
// 		<div className="container my-5">
// 			<h1 className="text-center mb-4">About Us</h1>
// 			<div className="row">
// 				<div className="col-md-6">
// 					<img src="" className="img-fluid mb-4" alt="About Us" />
// 				</div>
// 				<div className="col-md-6">
// 					<p>
// 						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel massa auctor, cursus purus vitae, pulvinar sapien. Donec auctor, odio vel laoreet ultricies, orci urna porttitor magna,
// 						vel lacinia mauris nibh vel eros. Cras in mauris ut velit ullamcorper rhoncus. Nullam non enim posuere, feugiat velit ut, rutrum sapien. Donec at lacinia nulla. Duis nec sapien in magna
// 						bibendum lobortis. Praesent aliquam, eros quis commodo bibendum, lorem ipsum dignissim nulla, vel tincidunt nulla libero a risus. Sed nec turpis vel velit auctor scelerisque. Sed aliquam,
// 						tortor in luctus vulputate, orci magna euismod odio, a lacinia velit mi nec neque. Sed vestibulum velit id quam rutrum, a convallis ante rhoncus. Sed non ante a orci iaculis blandit.
// 						Nullam varius dapibus orci.
// 					</p>
// 					<button className="btn btn-primary mt-4">Learn More</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default AboutUs;

import React from "react";

const AboutUs = () => {
	return (
		<div className="container mt-5 py-5">
			<div className="row">
				<div className="col-md-6">
					<h1>About Our eCommerce Store</h1>
					<p>We are a team of passionate individuals who love bringing high-quality products to our customers.</p>
					<p>Our mission is to make online shopping easy, affordable, and enjoyable for everyone.</p>
					<p>We offer a wide range of products, from electronics to home goods, and we are constantly adding new items to our inventory.</p>
				</div>
				<div className="col-md-6">
					<img src="/img/logo.png" className="img-fluid" alt="About Us" />
				</div>
			</div>
			<div className="row mt-5">
				<div className="col-md-6">
					<h2>Our Team</h2>
					<p>
						We have a dedicated team of experts who are passionate about what they do. From our customer service representatives to our product developers, everyone at our company is committed to
						providing the best possible experience for our customers.
					</p>
				</div>
				<div className="col-md-6">
					<h2>Our Mission</h2>
					<p>
						Our mission is to provide our customers with high-quality products at affordable prices. We believe that everyone should have access to the products they need to live their best lives, and
						we are committed to making that a reality.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
