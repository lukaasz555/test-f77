import { FooterNewsletter } from './FooterNewsletter';
import { FooterInformation } from './FooterInformation';
import { FooterCustomerSupport } from './FooterCustomerSupport';
import { FooterDescription } from './FooterDescription';

export const Footer = () => {
	return (
		<footer className='border-t-[1px] border-primary pt-5 px-2 flex flex-col gap-5 pb-5 overflow-hidden'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-10 lg:gap-y-0'>
				<FooterNewsletter />
				<FooterInformation />
				<FooterCustomerSupport />
				<FooterDescription />
			</div>
			<div className='flex justify-center'>
				<p className='text-xs font-semibold'>77store.com @ 2024</p>
			</div>
		</footer>
	);
};
