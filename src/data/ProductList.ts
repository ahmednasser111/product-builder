import { IProduct } from "../interfaces/index";

const productList: IProduct[] = [
	{
		id: "1",
		title: "Stylish T-Shirt",
		price: 29.99,
		description:
			"A comfortable and stylish t-shirt available in multiple colors.",
		imgUrl:
			"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60",
		colors: ["#FF0000", "#0000FF", "#008000"],
		category: {
			name: "Apparel",
			imgUrl:
				"https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&auto=format&fit=crop&q=60",
		},
	},
	{
		id: "2",
		title: "Wireless Headphones",
		price: 89.99,
		description: "High-quality wireless headphones with noise cancellation.",
		imgUrl:
			"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
		colors: ["#000000", "#FFFFFF"],
		category: {
			name: "Electronics",
			imgUrl:
				"https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=400&auto=format&fit=crop&q=60",
		},
	},
	{
		id: "3",
		title: "Running Shoes",
		price: 69.99,
		description: "Lightweight and comfortable running shoes for all terrains.",
		imgUrl:
			"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60",
		colors: ["#000000", "#808080", "#0000FF"],
		category: {
			name: "Footwear",
			imgUrl:
				"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&auto=format&fit=crop&q=60",
		},
	},
	{
		id: "4",
		title: "Smart Watch",
		price: 199.99,
		description: "A sleek smart watch with fitness tracking and notifications.",
		imgUrl:
			"https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=60",
		colors: ["#000000", "#C0C0C0"],
		category: {
			name: "Electronics",
			imgUrl:
				"https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=400&auto=format&fit=crop&q=60",
		},
	},
	{
		id: "5",
		title: "Leather Jacket",
		price: 149.99,
		description: "A classic leather jacket with a modern fit.",
		imgUrl:
			"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=60",
		colors: ["#000000", "#8B4513"],
		category: {
			name: "Apparel",
			imgUrl:
				"https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&auto=format&fit=crop&q=60",
		},
	},
	{
		id: "6",
		title: "Bluetooth Speaker",
		price: 59.99,
		description: "Portable Bluetooth speaker with high-quality sound.",
		imgUrl:
			"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=60",
		colors: ["#FF0000", "#0000FF", "#808080"],
		category: {
			name: "Electronics",
			imgUrl:
				"https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=400&auto=format&fit=crop&q=60",
		},
	},
	{
		id: "7",
		title: "Digital Camera",
		price: 499.99,
		description: "High-resolution digital camera with optical zoom.",
		imgUrl:
			"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=60",
		colors: ["#000000", "#C0C0C0"],
		category: {
			name: "Electronics",
			imgUrl:
				"https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=400&auto=format&fit=crop&q=60",
		},
	},
	{
		id: "8",
		title: "Backpack",
		price: 39.99,
		description: "Durable backpack with multiple compartments.",
		imgUrl:
			"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60",
		colors: ["#000000", "#000080", "#808080"],
		category: {
			name: "Accessories",
			imgUrl:
				"https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?w=400&auto=format&fit=crop&q=60",
		},
	},
	{
		id: "9",
		title: "Sunglasses",
		price: 29.99,
		description: "Stylish sunglasses with UV protection.",
		imgUrl:
			"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=60",
		colors: ["#000000", "#8B4513", "#808080"],
		category: {
			name: "Accessories",
			imgUrl:
				"https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?w=400&auto=format&fit=crop&q=60",
		},
	},
	{
		id: "10",
		title: "Fitness Tracker",
		price: 79.99,
		description:
			"A fitness tracker with heart rate monitoring and activity tracking.",
		imgUrl:
			"https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&auto=format&fit=crop&q=60",
		colors: ["#000000", "#0000FF", "#800080"],
		category: {
			name: "Electronics",
			imgUrl:
				"https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=400&auto=format&fit=crop&q=60",
		},
	},
];

export default productList;
