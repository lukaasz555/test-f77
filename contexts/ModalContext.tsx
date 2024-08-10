'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type ModalContextType = {
	isOpen: boolean;
	closeModal: () => void;
	openModal: (title: string, content: JSX.Element) => void;
	modalTitle: string;
	modalContent: JSX.Element;
};

export const ModalContext = createContext<ModalContextType>({
	isOpen: false,
	closeModal: () => {},
	openModal: () => {},
	modalTitle: '',
	modalContent: <></>,
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [modalTitle, setModalTitle] = useState('');
	const [modalContent, setModalContent] = useState<JSX.Element>(<></>);

	const openModal = (title: string, content: JSX.Element) => {
		setModalTitle(title);
		setModalContent(content);
		setIsOpen(true);
	};

	const closeModal = () => {
		setModalTitle('');
		setModalContent(<></>);
		setIsOpen(false);
	};

	return (
		<ModalContext.Provider
			value={{ isOpen, openModal, closeModal, modalTitle, modalContent }}>
			{children}
		</ModalContext.Provider>
	);
};

export const useModal = () => {
	const context = useContext(ModalContext);
	if (context) return context;

	throw new Error('useModal must be used within a ModalProvider');
};
