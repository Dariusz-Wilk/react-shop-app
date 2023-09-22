import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = ({ colors, currentColor, updateColor }) => {
	const prepareColorClassName = color => {
		return styles[
			'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
		];
	};

	return (
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
	);
};

OptionColor.propTypes = {
	currentColor: PropTypes.string.isRequired,
};

export default OptionColor;
