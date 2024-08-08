import Product from "./components/Product/Product";
import ProductList from "./data/ProductList";

interface IProps {}
function App({}: IProps) {
	return (
		<main className="container p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
			{ProductList.map((product, i) => (
				<Product product={product} key={i} />
			))}
		</main>
	);
}
export default App;
