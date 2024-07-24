import { InputHTMLAttributes, useId, useState } from 'react';
import clsx from 'clsx';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	label?: string;
	error?: string;
	height?: number;
	maxWidth?: number;
}

export const Input = ({
	value,
	className,
	label,
	type = 'text',
	error,
	height = 40,
	...rest
}: Props) => {
	const [isFocused, setFocused] = useState(false);

	const inputId = useId();
	const isShrinkLabel = isFocused || value;

	const handleFocus = () => setFocused(true);
	const handleBlur = () => setFocused(false);

	return (
		<div className={clsx('flex flex-col items-start relative my-2', className)}>
			<label
				htmlFor={inputId}
				className={clsx(
					'absolute transition-all duration-150 bg-background',
					isShrinkLabel
						? 'text-2xs  left-1 -top-[7px] px-[2px]'
						: 'text-2sm top-[10px] left-3 text-text',
					rest.disabled ? 'text-border cursor-not-allowed' : '',
					error ? 'text-error' : ''
				)}>
				{label}
			</label>
			<input
				id={inputId}
				name={rest.name}
				value={value}
				type={type}
				disabled={rest.disabled}
				placeholder={rest.placeholder}
				className={clsx(
					'border-1 border-border px-2 text-2sm bg-background',
					'active:outline-none focus:outline-none focus:border-black',
					error ? 'border-error focus:border-error text-error' : '',
					rest.disabled ? 'cursor-not-allowed' : ''
				)}
				style={{
					height: `${height}px`,
				}}
				onFocus={handleFocus}
				onBlur={handleBlur}
				{...rest}
			/>
			{error && <p className='text-error text-1xs px-1'>{error}</p>}
		</div>
	);
};
