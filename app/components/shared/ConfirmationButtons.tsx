import React from 'react';
import { Button } from './Button';
import clsx from 'clsx';

type Props = {
	onConfirm: () => void;
	onCancel: () => void;
	isConfirmButtonVisible?: boolean;
	isConfirmButtonDisabled?: boolean;
	isCancelButtonVisible?: boolean;
	isCancelButtonDisabled?: boolean;
	className?: string;
	confirmButtonText?: string;
	cancelButtonText?: string;
};

function ConfirmationButtons({
	onConfirm,
	onCancel,
	isConfirmButtonVisible = true,
	isCancelButtonVisible = true,
	isConfirmButtonDisabled = false,
	isCancelButtonDisabled = false,
	className = '',
	confirmButtonText = 'Confirm',
	cancelButtonText = 'Cancel',
}: Props) {
	return (
		<div className={clsx('flex items-center', className)}>
			{isConfirmButtonVisible && (
				<Button
					buttonText={confirmButtonText}
					disabled={isConfirmButtonDisabled}
					animateOnHover
					onClick={onConfirm}
				/>
			)}
			{isCancelButtonVisible && (
				<Button
					buttonText={cancelButtonText}
					disabled={isCancelButtonDisabled}
					secondary
					animateOnHover
					onClick={onCancel}
				/>
			)}
		</div>
	);
}

export default ConfirmationButtons;
