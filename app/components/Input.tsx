import { InputHTMLAttributes } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
	return (
		<Box className='mt-2'>
			<TextField
				value={value}
				label={label}
				error={!!error}
				helperText={error ? error : ''}
				disabled={rest.disabled}
				onChange={rest.onChange}
				placeholder={rest.placeholder}
				size='small'
				color='primary'
			/>
		</Box>
	);
};
