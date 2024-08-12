import { ChangeEvent, useState } from "react";
import Product from "./components/Product/Product";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import MyModal from "./components/ui/MyModal";
import FormInputs from "./data/FormInputs";
import ProductList from "./data/ProductList";
import { IProduct } from "./interfaces/index";

function App() {
	function closeDialog() {
		setIsOpen(false);
	}
	function changeHandler(e: ChangeEvent<HTMLInputElement>) {
		let { name, value } = e.target;
		setProduct({ ...product, [name]: value });
	}
	const [isOpen, setIsOpen] = useState(false);
	const [product, setProduct] = useState<IProduct>({
		title: "",
		description: "",
		imgURL: "",
		price: "",
		colors: [],
		category: {
			name: "",
			imgURL: "",
		},
	});
	return (
		<main className="container p-2 ">
			<header className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200">
				<h1 className="text-xl font-semibold text-gray-900 font-bold">
					Latest Products
				</h1>
				<Button
					className="bg-emerald-600 text-white font-medium py-2 px-4 rounded hover:bg-emerald-700 transition duration-200"
					onClick={() => setIsOpen(true)}>
					Add
				</Button>
				<MyModal isOpen={isOpen} onClose={setIsOpen} title="Add Product">
					<form className="flex flex-col">
						{FormInputs.map((input) => (
							<label
								key={input.id}
								htmlFor={input.id}
								className="flex flex-col text-sm font-medium text-gray-700 mb-3">
								{input.label}
								<Input
									type={input.type}
									id={input.id}
									name={input.name}
									value={product[input.name]}
									onChange={changeHandler}
								/>
							</label>
						))}
						<div className="flex gap-3">
							<Button
								className="bg-emerald-600 text-white font-medium py-2 px-4 rounded hover:bg-emerald-700 transition duration-200"
								width="flex-1">
								Submit
							</Button>
							<Button
								className="bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
								width="flex-1"
								type="reset">
								Reset
							</Button>
							<Button
								className="bg-red-600 text-white font-medium py-2 px-4 rounded hover:bg-red-700 transition duration-200"
								width="flex-1"
								onClick={closeDialog}>
								Close
							</Button>
						</div>
					</form>
				</MyModal>
			</header>

			<div className="container p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
				{ProductList.map((product, i) => (
					<Product product={product} key={i} />
				))}
			</div>
		</main>
	);
}
export default App;
