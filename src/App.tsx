import { ChangeEvent, FormEvent, useState } from "react";
import Product from "./components/Product/Product";
import Button from "./components/ui/Button";
import ColorCircle from "./components/ui/ColorCircle";
import Input from "./components/ui/Input";
import MyModal from "./components/ui/MyModal";
import Colors from "./data/Colors";
import FormInputs from "./data/FormInputs";
import ProductList from "./data/ProductList";
import { IProduct } from "./interfaces/index";
import { productValidation } from "./validation/index";
import { v4 as uuidv4 } from "uuid";
import Select from "./components/ui/Select";
import categoryList from "./data/CategoryList";

function App() {
	function closeDialog() {
		setProduct(defaultProduct);
		setErrors(defaultErrors);
		setIsOpen(false);
	}
	function Submit() {
		setProducts([{ ...product, id: uuidv4() }, ...products]);
	}
	function EditSubmit() {
		const updatedProducts = products.slice();
		updatedProducts[idx] = productToEdit;
		setProducts(updatedProducts);
	}
	function changeHandler(
		e: ChangeEvent<HTMLInputElement>,
		set: (p: IProduct) => void,
		p: IProduct
	) {
		let { name, value } = e.target;
		set({ ...p, [name]: value });
		setErrors({ ...errors, [name]: "" });
	}
	function formRender(
		product: IProduct,
		setProduct: (p: IProduct) => void,
		onClose: () => void,
		onSubmit: () => void
	) {
		return (
			<form
				className="flex flex-col"
				onSubmit={(e: FormEvent<HTMLFormElement>) => {
					e.preventDefault();
					const errors = productValidation({
						title: product.title,
						description: product.description,
						imgURL: product.imgURL,
						price: product.price,
						colors: product.colors,
					});

					if (!Object.values(errors).every((error) => !error)) {
						setErrors(errors);
						return;
					}
					// submit
					product.category = category;
					onSubmit();
					onClose();
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
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								changeHandler(e, setProduct, product)
							}
						/>
						{errors[input.name] && (
							<div className="text-red-700 text-sm font-semibold">
								{errors[input.name]}
							</div>
						)}
					</label>
				))}
				<Select selected={category} setSelected={setCategory} />
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
				{errors.colors && (
					<div className="text-red-700 text-sm font-semibold">
						{errors.colors}
					</div>
				)}
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
						className="bg-red-600 text-white font-medium py-2 px-4 rounded hover:bg-red-700 transition duration-200"
						width="flex-1"
						onClick={onClose}>
						Close
					</Button>
				</div>
			</form>
		);
	}
	const defaultProduct: IProduct = {
		title: "",
		description: "",
		imgURL: "",
		price: "",
		colors: [],
		category: {
			id: uuidv4(),
			name: "",
			imgURL: "",
		},
	};
	const defaultErrors = {
		title: "",
		description: "",
		imgURL: "",
		price: "",
		colors: "",
	};
	const [isOpen, setIsOpen] = useState(false);
	const [isEditOpen, setIsEditOpen] = useState(false);
	const [product, setProduct] = useState<IProduct>(defaultProduct);
	const [productToEdit, setProductToEdit] = useState<IProduct>(defaultProduct);
	const [products, setProducts] = useState<IProduct[]>(ProductList);
	const [errors, setErrors] = useState(defaultErrors);
	const [category, setCategory] = useState(categoryList[0]);
	const [idx, setIdx] = useState<number>(0);

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
					{formRender(product, setProduct, closeDialog, Submit)}
				</MyModal>
				<MyModal
					isOpen={isEditOpen}
					onClose={setIsEditOpen}
					title="Edit Product">
					{formRender(
						productToEdit,
						setProductToEdit,
						() => setIsEditOpen(false),
						EditSubmit
					)}
				</MyModal>
			</header>

			<div className="container p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
				{products.map((product, idx) => (
					<Product
						product={product}
						key={product.id}
						products={products}
						setProducts={setProducts}
						setProductToEdit={setProductToEdit}
						setIsEditOpen={setIsEditOpen}
						idx={idx}
						setIdx={setIdx}
						setCategory={setCategory}
					/>
				))}
			</div>
		</main>
	);
}
export default App;
