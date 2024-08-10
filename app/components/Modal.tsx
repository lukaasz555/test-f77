'use client';
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useModal } from '@/contexts/ModalContext';
import { Button } from '@mui/material';

function Modal() {
	const { isOpen, closeModal, modalTitle, modalContent } = useModal();

	return (
		<>
			<Dialog open={isOpen} onClose={closeModal}>
				{modalTitle && <DialogTitle>{modalTitle}</DialogTitle>}
				{modalContent && <DialogContent>{modalContent}</DialogContent>}
				<DialogActions>
					<button onClick={closeModal}>Close</button>
					<Button onClick={closeModal}>Close</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

export default Modal;
