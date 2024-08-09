'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type SidebarContextType = {
	isOpen: boolean;
	toggleSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContextType>({
	isOpen: false,
	toggleSidebar: () => {},
});

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};

	return (
		<SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
			{children}
		</SidebarContext.Provider>
	);
};

export const useSidebar = () => {
	const context = useContext(SidebarContext);
	if (!context) {
		throw new Error('useSidebar must be used within a SidebarProvider');
	}
	return context;
};
