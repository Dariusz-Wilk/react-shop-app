import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = ({ sizes, currentSize, updateSize }) => {
	return (
		<div className={styles.sizes}>
			<h3 className={styles.optionLabel}>Sizes</h3>
			<ul className={styles.choices}>
				{sizes.map(size => {
					return (
						<li key={size.name}>
							<button
								type="button"
								data-size={size.name}
								className={clsx(size.name === currentSize && styles.active)}
								onClick={updateSize}>
								{size.name}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

OptionSize.propTypes = {
	sizes: PropTypes.array.isRequired,
	currentSize: PropTypes.string.isRequired,
};

export default OptionSize;
