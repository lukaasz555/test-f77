import { clsx } from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	buttonText: string;
	className?: string;
	buttonAlign?: 'left' | 'center' | 'right';
	height?: number;
	animateOnHover?: boolean;
	showArrowRight?: boolean;
	secondary?: boolean;
}

export const Button = (props: Props) => {
	const {
		className,
		buttonText,
		onClick,
		buttonAlign = 'center',
		height = 40,
		animateOnHover = false,
		showArrowRight = false,
		secondary = false,
		...rest
	} = props;

	return (
		<div
			className={clsx(
				`flex justify-${
					buttonAlign === 'center'
						? 'center'
						: buttonAlign === 'left'
						? 'start'
						: 'end'
				}`
			)}>
			<button
				className={clsx(
					'bg-primary group relative px-8 py-2 text-center uppercase text-2sm font-medium text-background tracking-wider transition-all duration-300 border-2 border-primary',
					animateOnHover ? 'hover:bg-background hover:text-header' : '',
					showArrowRight ? 'flex items-center' : '',
					secondary ? 'bg-transparent text-black border-black' : '',
					secondary && animateOnHover ? 'hover:bg-lightGray' : '',
					props.disabled
						? ' bg-lightGray border-lightGray text-text cursor-not-allowed'
						: '',
					props.disabled && animateOnHover
						? 'hover:bg-lightGray hover:border-lightGray hover:text-text'
						: ''
				)}
				disabled={rest.disabled}
				style={{ height: `${height}px` }}
				onClick={onClick}>
				<span>{buttonText}</span>
				{showArrowRight && (
					<MdKeyboardArrowRight
						className={clsx(
							'absolute opacity-0 right-4 group-hover:opacity-100 group-hover:block group-hover:right-2 transition-all duration-150'
						)}
						style={{ fontSize: 20 }}
					/>
				)}
			</button>
		</div>
	);
};
