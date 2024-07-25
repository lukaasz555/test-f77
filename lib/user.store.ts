import { create } from 'zustand';

type UserData = {
	id: number;
	email: string;
	name?: string;
	lastname?: string;
};

type Store = {
	isLoggedIn: boolean;
	userData: UserData | null;
	jwtToken: string;
};

const handleLogin = async (): Promise<void> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 777);
	});
};

export const useUserStore = create<Store>((set, get) => ({
	isLoggedIn: false,
	userData: null,
	jwtToken: '',

	login: async (userData: UserData, jwtToken: string) => {
		await handleLogin();
		set({ isLoggedIn: true, userData, jwtToken });
	},
}));
