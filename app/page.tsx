import Image from 'next/image';
import { Slider } from './components/Slider';

export default function Page() {
	return (
		<div className='flex flex-col gap-10'>
			<Slider />

			<div
				className='flex justify-center items-center'
				style={{ height: '600px', backgroundColor: '#F1F1F1' }}>
				HOT DEALS PLACEHOLDER
			</div>
		</div>
	);
}
