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
					if (prev.colors.includes(color))
						return { ...prev, colors: prev.colors.filter((c) => c !== color) };
					return {
						...prev,
						colors: [...prev.colors, color],
					};
				});
			}}></span>
	);
}
export default memo(ColorCircle);
