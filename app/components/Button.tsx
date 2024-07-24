import { clsx } from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	buttonText: string;
	className?: string;
	buttonAlign?: 'left' | 'center' | 'right';
	height?: number;
}

export const Button = (props: Props) => {
	const {
		className,
		buttonText,
		onClick,
		buttonAlign = 'center',
		height = 40,
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
					'bg-primary  px-6 py-2 text-center uppercase text-2sm font-medium text-background tracking-wider transition-all duration-300 border-2 border-primary',
					'hover:bg-background hover:text-header'
				)}
				disabled={rest.disabled}
				style={{ height: `${height}px` }}
				onClick={onClick}>
				{buttonText}
			</button>
		</div>
	);
};
