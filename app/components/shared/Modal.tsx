'use client';
import React, { useState } from 'react';
import type { Breakpoint } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { useModal } from '@/contexts/ModalContext';
import { Button, DialogContent, DialogTitle } from '@mui/material';
import Slide from '@mui/material/Slide';
import ConfirmationButtons from './ConfirmationButtons';

function Modal() {
	const [maxWidth, setMaxWidth] = useState<Breakpoint>('sm');
	const { isOpen, closeModal, modalTitle, modalContent, modalActions } =
		useModal();

	return (
		<>
			<Dialog
				open={isOpen}
				onClose={closeModal}
				fullWidth
				maxWidth={maxWidth}
				transitionDuration={300}
				TransitionComponent={Slide}>
				<DialogTitle>{modalTitle}</DialogTitle>
				<DialogContent>{modalContent}</DialogContent>
				<DialogActions>
					{/* {modalActions ? (
						modalActions
					) : (
						<Button onClick={closeModal}>Close</Button>
					)} */}
					<ConfirmationButtons
						className='justify-center w-full gap-x-5'
						onCancel={closeModal}
						onConfirm={closeModal}
					/>
				</DialogActions>
			</Dialog>
		</>
	);
}

export default Modal;
