'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type ModalComponentType = () => JSX.Element;

type ModalContextType = {
	isOpen: boolean;
	closeModal: () => void;
	openModal: (content: ModalComponentType, title?: string) => void;
	modalTitle?: string;
	modalContent: JSX.Element | null;
	modalActions?: JSX.Element | null;
};

export const ModalContext = createContext<ModalContextType>({
	isOpen: false,
	closeModal: () => {},
	openModal: () => {},
	modalTitle: '',
	modalContent: <></>,
	modalActions: <></>,
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [modalTitle, setModalTitle] = useState('');
	const [modalContent, setModalContent] = useState<JSX.Element | null>(null);
	const [modalActions, setModalActions] = useState<JSX.Element | null>(null);

	const openModal = (
		content: ModalComponentType,
		title?: string,
		actions?: ModalComponentType
	) => {
		setModalContent(content);
		title && setModalTitle(title);
		actions && setModalActions(actions);
		setIsOpen(true);
	};

	const closeModal = () => {
		setModalTitle('');
		setModalContent(null);
		setModalActions(null);
		setIsOpen(false);
	};

	return (
		<ModalContext.Provider
			value={{
				isOpen,
				openModal,
				closeModal,
				modalTitle,
				modalContent,
				modalActions,
			}}>
			{children}
		</ModalContext.Provider>
	);
};

export const useModal = () => {
	const context = useContext(ModalContext);
	if (context) return context;

	throw new Error('useModal must be used within a ModalProvider');
};
