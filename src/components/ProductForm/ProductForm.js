import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import PropTypes from 'prop-types';

const ProductForm = ({
	sizes,
	currentSize,
	updateSize,
	colors,
	currentColor,
	updateColor,
	getSummary,
}) => {
	return (
		<form>
			<OptionSize
				sizes={sizes}
				currentSize={currentSize}
				updateSize={updateSize}
			/>
			<OptionColor
				colors={colors}
				currentColor={currentColor}
				updateColor={updateColor}
			/>
			<Button onClick={getSummary}>
				<span className="fa fa-shopping-cart" />
			</Button>
		</form>
	);
};

ProductForm.propTypes = {
	currentColor: PropTypes.string.isRequired,
	colors: PropTypes.array.isRequired,
	currentSize: PropTypes.string.isRequired,
	sizes: PropTypes.array.isRequired,
};

export default ProductForm;
