'use client';
import React, { useState } from 'react';
import type { Breakpoint } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useModal } from '@/contexts/ModalContext';
import { Button } from '@mui/material';
import Slide from '@mui/material/Slide';

function Modal() {
	const [maxWidth, setMaxWidth] = useState<Breakpoint>('sm');
	const { isOpen, closeModal, modalTitle, modalContent } = useModal();

	return (
		<>
			<Dialog
				open={isOpen}
				onClose={closeModal}
				fullWidth
				maxWidth={maxWidth}
				transitionDuration={300}
				TransitionComponent={Slide}>
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
