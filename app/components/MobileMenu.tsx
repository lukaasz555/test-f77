import { GiHamburgerMenu } from 'react-icons/gi';
import { Category } from '../data/mockCategories';

type Props = {
	categories: Category[];
};

export const MobileMenu = ({ categories }: Props) => {
	return (
		<div className='lg:hidden'>
			<button>
				<GiHamburgerMenu size={24} />
			</button>
		</div>
	);
};
