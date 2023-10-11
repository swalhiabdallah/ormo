import Slideshow from "./Slideshow";
import Categs from "./Categs";
import Products from "./Products";

function Home(props) {
	return (
		<div>
			<Slideshow />
			<Categs />
			<Products products={props.products} />
		</div>
	);
}

export default Home;
