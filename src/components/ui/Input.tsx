import { memo } from "react";

interface IProps {}
function Input({ ...rest }: IProps) {
	return (
		<input
			className="mt-2 p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none"
			{...rest}
		/>
	);
}
export default memo(Input);
