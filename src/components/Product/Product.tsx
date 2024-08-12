import { IProduct } from "../../interfaces/index";
import Image from "../Image/Image";
import Button from "../ui/Button";
interface IProps {
	product: IProduct;
}
/**
 * Product component displays detailed information about a product.
 *
 * @param {IProps} props - The properties for the Product component.
 * @param {IProduct} props.product - The product details to display.
 * @returns {JSX.Element} The rendered Product component.
 */
function Product({ product }: IProps) {
	const { id, title, price, description, imgUrl, category, colors } = product;
	return (
		<div className="rounded-md border-2 p-3">
			<Image src={imgUrl} alt={title} className="rounded-md" />
			<h3 className="my-5 text-xl font-bold">{title}</h3>
			<p className="my-5">{description}</p>
			<div className="flex items-center gap-2 my-5">
				{colors.map((c, i) => (
					<span
						key={i}
						style={{ backgroundColor: c }}
						className="rounded-full w-5 h-5"></span>
				))}
			</div>
			<div className="flex justify-between items-center">
				<span>${price}</span>
				<Image
					src={category.imgUrl}
					alt={category.name}
					className="rounded-full w-8 h-8"
				/>
			</div>
			<div className="flex gap-4 mt-5">
				<Button className="bg-blue-900" width="flex-1">
					EDIT
				</Button>
				<Button className="bg-red-900" width="flex-1">
					DELETE
				</Button>
			</div>
		</div>
	);
}
export default Product;
