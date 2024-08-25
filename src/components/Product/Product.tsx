import toast, { Toaster } from "react-hot-toast";
import { ICategory, IProduct } from "../../interfaces/index";
import Image from "../Image/Image";
import Button from "../ui/Button";
import ColorCircle from "../ui/ColorCircle";
interface IProps {
	product: IProduct;
	setProducts: (products: IProduct[]) => void;
	products: IProduct[];
	setProductToEdit: (p: IProduct) => void;
	setIsEditOpen: (b: boolean) => void;
	idx: number;
	setIdx: (n: number) => void;
	setCategory: (c: ICategory) => void;
}
/**
 * Product component displays detailed information about a product.
 *
 * @param {IProps} props - The properties for the Product component.
 * @param {IProduct} props.product - The product details to display.
 * @returns {JSX.Element} The rendered Product component.
 */
function Product({
	product,
	setProducts,
	products,
	setProductToEdit,
	setIsEditOpen,
	idx,
	setIdx,
	setCategory,
}: IProps) {
	function handleEdit() {
		setProductToEdit(product);
		setIdx(idx);
		setCategory(category);
		setIsEditOpen(true);
	}
	const { title, price, description, imgURL, category, colors } = product;
	return (
		<div className="rounded-md border-2 p-3 bg-neutral-100">
			<Image src={imgURL} alt={title} className="rounded-md" />
			<h3 className="my-5 text-xl font-bold">{title}</h3>
			<p className="my-5">{description}</p>
			<div className="flex items-center gap-2 my-5">
				{colors.map((c, i) => (
					<ColorCircle color={c} key={i} />
				))}
			</div>
			<div className="flex justify-between items-center">
				<span>${price}</span>
				<Image
					src={category.imgURL}
					alt={category.name}
					className="rounded-full w-8 h-8"
				/>
			</div>
			<div className="flex gap-4 mt-5">
				<Button className="bg-blue-900" width="flex-1" onClick={handleEdit}>
					EDIT
				</Button>
				<Button
					className="bg-red-900"
					width="flex-1"
					onClick={() => {
						const nextProducts = products.slice();
						nextProducts.splice(idx, 1);
						setProducts(nextProducts);
						toast(`Product ${idx + 1} has been deleted`);
					}}>
					DELETE
				</Button>
			</div>
			<Toaster />
		</div>
	);
}
export default Product;
