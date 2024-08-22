import { ChangeEvent, FormEvent, useState } from "react";
import Product from "./components/Product/Product";
import Button from "./components/ui/Button";
import ColorCircle from "./components/ui/ColorCircle";
import Input from "./components/ui/Input";
import MyModal from "./components/ui/MyModal";
import Colors from "./data/Colors";
import FormInputs from "./data/FormInputs";
import ProductList from "./data/ProductList";
import { IProduct, IValidation } from "./interfaces/index";
import { productValidation } from "./validation/index";

function App() {
	function closeDialog() {
		setProduct(defaultProduct);
		setErrors(defaultErrors);
		setIsOpen(false);
	}
	function changeHandler(e: ChangeEvent<HTMLInputElement>) {
		let { name, value } = e.target;
		setProduct({ ...product, [name]: value });
		setErrors({ ...errors, [name]: "" });
	}
	const defaultProduct: IProduct = {
		title: "",
		description: "",
		imgURL: "",
		price: "",
		colors: [],
		category: {
			name: "",
			imgURL: "",
		},
	};
	const defaultErrors: IValidation = {
		title: "",
		description: "",
		imgURL: "",
		price: "",
	};
	const [isOpen, setIsOpen] = useState(false);
	const [product, setProduct] = useState<IProduct>(defaultProduct);
	const [errors, setErrors] = useState<IValidation>(defaultErrors);
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
					<form
						className="flex flex-col"
						onSubmit={(e: FormEvent<HTMLFormElement>) => {
							e.preventDefault();
							const errors = productValidation({
								title: product.title,
								description: product.description,
								imgURL: product.imgURL,
								price: product.price,
							});

							if (!Object.values(errors).every((error) => !error)) {
								setErrors(errors);
								return;
							}
							// console.log("submit");
						}}>
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
								{errors[input.name] && (
									<div className="text-red-700 text-sm font-semibold">
										{errors[input.name]}
									</div>
								)}
							</label>
						))}

						<div className="flex items-center gap-2 my-5">
							{Object.keys(Colors).map((c) => (
								<ColorCircle
									color={c}
									key={c}
									product={product}
									setProduct={setProduct}
								/>
							))}
						</div>
						<div className="flex gap-2 flex-wrap">
							{product.colors.map((c) => (
								<span
									key={c}
									className="p-2 rounded-md text-white"
									style={{
										backgroundColor: c,
									}}>
									{Colors[c]}
								</span>
							))}
						</div>

						<div className="flex gap-3 mt-5">
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
				{ProductList.map((product) => (
					<Product product={product} key={product.id} />
				))}
			</div>
		</main>
	);
}
export default App;
