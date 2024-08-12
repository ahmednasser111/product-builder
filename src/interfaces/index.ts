export interface IProduct {
	id?: string;
	title: string;
	price: string;
	description: string;
	imgURL: string;
	category: ICategory;
	colors: string[];
}
export interface ICategory {
	name: string;
	imgURL: string;
}
export interface IInputs {
	id: string;
	name: "title" | "description" | "price" | "imgURL";
	label: string;
	type: string;
}

export interface IProductInputs {
	title: string;
	desc: string;
	image: string;
	price: string;
}