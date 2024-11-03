import { memo } from "react";
import { IProduct } from "../../interfaces/index";

interface IProps {
	color: string;
	setProduct: (p: IProduct) => void;
}
function ColorCircle({ color, setProduct }: IProps) {
	return (
		<span
			style={{ backgroundColor: color }}
			className="rounded-full w-5 h-5 block cursor-pointer"
			onClick={() => {
				setProduct((prev: IProduct) => {
					const colorExists = prev.colors.includes(color);
					const newProduct: IProduct = {
						...prev,
						colors: colorExists
							? prev.colors.filter((c) => c !== color)
							: [...prev.colors, color],
					};
					return newProduct;
				});
			}}></span>
	);
}
export default memo(ColorCircle);
