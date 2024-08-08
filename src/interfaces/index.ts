export interface IProduct {
	id: string;
	title: string;
	price: number;
	description: string;
	imgUrl: string;
	category: ICategory;
	colors: string[];
}
export interface ICategory {
	name: string;
	imgUrl: string;
}
