function Categs() {
	const Categ = [
		{ id: 1, title: "Audio", image: "/img/Audio.png" },
		{ id: 2, title: "Mode", image: "/img/Mode.png" },
		{ id: 3, title: "Power", image: "/img/Power.png" },
		{ id: 4, title: "Able", image: "/img/Able.png" },
	];
	return (
		<div className="container-fluid">
			<div className="row p-0 my-5 pe-3 ps-2">
				{Categ.map((Cat) => (
					<div key={Cat.id} className="col-6 p-2">
						<img src={Cat.image} alt={Cat.title} style={{ width: "100%", objectFit: "contain" }} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Categs;
