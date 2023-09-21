import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = ({ title, name, basePrice, colors, sizes }) => {
	const [currentColor, setCurrentColor] = useState(colors[0]);
	const [currentSize, setCurrentSize] = useState(sizes[0].name);

	const prepareColorClassName = color => {
		return styles[
			'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
		];
	};

	const updateSize = e => {
		setCurrentSize(e.target.dataset.size);
	};

	const updateColor = e => {
		setCurrentColor(e.target.dataset.color);
	};

	const getPrice = () => {
		const matchSize = sizes.find(el => el.name === currentSize);
		const extraPrice = matchSize.additionalPrice;

		return basePrice + extraPrice;
	};

	return (
		<article className={styles.product}>
			<div className={styles.imageContainer}>
				<img
					className={styles.image}
					alt={title}
					src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}
				/>
			</div>
			<div>
				<header>
					<h2 className={styles.name}>{title}</h2>
					<span className={styles.price}>Price: {getPrice()}$</span>
				</header>
				<form>
					<div className={styles.sizes}>
						<h3 className={styles.optionLabel}>Sizes</h3>
						<ul className={styles.choices}>
							{sizes.map(size => {
								return (
									<li key={size.name}>
										<button
											type="button"
											data-size={size.name}
											className={size.name === currentSize && styles.active}
											onClick={updateSize}>
											{size.name}
										</button>
									</li>
								);
							})}
						</ul>
					</div>
					<div className={styles.colors}>
						<h3 className={styles.optionLabel}>Colors</h3>
						<ul className={styles.choices}>
							{colors.map(item => {
								return (
									<li key={item}>
										<button
											type="button"
											data-color={item}
											className={clsx(
												prepareColorClassName(item),
												item === currentColor && styles.active
											)}
											onClick={updateColor}
										/>
									</li>
								);
							})}
						</ul>
					</div>
					<Button className={styles.button}>
						<span className="fa fa-shopping-cart" />
					</Button>
				</form>
			</div>
		</article>
	);
};

Product.propTypes = {
	title: PropTypes.string,
	basePrice: PropTypes.number,
	size: PropTypes.string,
};

export default Product;
