import slider2 from '@/public/slider2.avif';
import slider1 from '@/public/slider1.avif';
import slider3 from '@/public/slider3.avif';
import slider4 from '@/public/slider4.avif';
import slider5 from '@/public/slider5.avif';
import { Button } from './Button';

// * it's just a dummy slider component - no idea for this
export const Slider = () => {
	return (
		<div
			className='flex justify-center overflow-hidden relative py-16'
			style={{
				height: '400px',
				width: '100%',
				backgroundImage: `url(${slider2.src})`,
				backgroundPosition: 'center',
			}}>
			<div className='w-11/12 self-end flex flex-col items-center md:items-start'>
				<h3>SUMMER SALE</h3>
				<Button buttonText='EXPLORE' buttonAlign='left' showArrowRight />
			</div>
		</div>
	);
};
