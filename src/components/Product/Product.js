import styles from './Product.module.scss';
import ProductForm from '../ProductForm/ProductForm';
import ProductImage from '../ProductImage/ProductImage';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

const Product = ({ title, name, basePrice, colors, sizes }) => {
	const [currentColor, setCurrentColor] = useState(colors[0]);
	const [currentSize, setCurrentSize] = useState(sizes[0].name);

	const updateSize = e => {
		setCurrentSize(e.target.dataset.size);
	};

	const updateColor = e => {
		setCurrentColor(e.target.dataset.color);
	};

	const price = useMemo(() => {
		const matchSize = sizes.find(el => el.name === currentSize);
		const extraPrice = matchSize.additionalPrice;
		return basePrice + extraPrice;
	}, [currentSize, basePrice, sizes]);

	const getSummary = e => {
		e.preventDefault();
		const summaryObj = {
			name: title,
			price: price,
			size: currentSize,
			color: currentColor,
		};

		console.log(summaryObj);
		console.log(`Summary`);
		console.log(`=================`);
		console.log(`Name: `, summaryObj.name);
		console.log(`Price: `, summaryObj.price);
		console.log(`Size: `, summaryObj.size);
		console.log(`Color: `, summaryObj.color);
	};

	return (
		<article className={styles.product}>
			<ProductImage title={title} name={name} currentColor={currentColor} />
			<div>
				<header>
					<h2 className={styles.name}>{title}</h2>
					<span className={styles.price}>Price: {price}$</span>
				</header>
				<ProductForm
					sizes={sizes}
					currentSize={currentSize}
					currentColor={currentColor}
					updateSize={updateSize}
					colors={colors}
					updateColor={updateColor}
					getSummary={getSummary}
				/>
			</div>
		</article>
	);
};

Product.propTypes = {
	title: PropTypes.string.isRequired,
	basePrice: PropTypes.number.isRequired,
	sizes: PropTypes.array.isRequired,
};

export default Product;
