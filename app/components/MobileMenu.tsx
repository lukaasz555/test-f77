import { GiHamburgerMenu } from 'react-icons/gi';

export const MobileMenu = () => {
	return (
		<div className='lg:hidden'>
			<button>
				<GiHamburgerMenu size={24} />
			</button>
		</div>
	);
};
