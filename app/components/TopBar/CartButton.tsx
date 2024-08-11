import { useModal } from '@/contexts/ModalContext';
import { FaShoppingCart } from 'react-icons/fa';

const CartModal = () => {
	return <div>CartModal - content</div>;
};

export const CartButton = () => {
	const { openModal } = useModal();

	return (
		<button>
			<FaShoppingCart
				size={24}
				onClick={() => {
					openModal('Test...', <div>CartModal - content</div>);
				}}
			/>
		</button>
	);
};
