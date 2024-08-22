import { IValidation } from "../interfaces/index";

/**
 * Validates the product object fields against specific rules.
 *
 * @param {IValidation} product - The product object containing title, price, description, and imgURL.
 * @returns {IValidation} errors - An object containing error messages for each invalid field.
 *
 * The validation rules are:
 * - Title: Must be between 10 and 80 characters.
 * - Price: Must be a valid number.
 * - Description: Cannot be empty.
 * - imgURL: Must be a valid URL pointing to an image (png, jpg, jpeg, gif, bmp) and between 10 and 900 characters.
 */
export const productValidation = (product: IValidation): IValidation => {
	const errors: IValidation = {
		title: "",
		price: "",
		description: "",
		imgURL: "",
	};

	const title = product.title.trim();
	const imgURL = product.imgURL.trim();
	const price = product.price.trim();
	const description = product.description.trim();

	const imgUrlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp))$/i;

	if (!price || isNaN(Number(price))) {
		errors.price = "Product price must be a number";
	}

	if (!description || description.length < 10 || description.length > 80) {
		errors.description = "Product description must be provided";
	}

	if (!title || title.length < 10 || title.length > 80) {
		errors.title = "Product title must be between 10 and 80 characters";
	}

	if (
		!imgURL ||
		imgURL.length < 10 ||
		imgURL.length > 900 ||
		!imgUrlRegex.test(imgURL)
	) {
		errors.imgURL = "Product image URL must be between 10 and 900 characters";
	}

	return errors;
};
