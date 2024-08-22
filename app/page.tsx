import { Slider } from './components/slider/Slider';

async function Page() {
	return (
		<div className='flex flex-col gap-10 w-full'>
			<Slider />
			<div
				className='flex justify-center items-center'
				style={{ height: '600px', backgroundColor: '#F1F1F1' }}>
				HOT DEALS PLACEHOLDER
			</div>
		</div>
	);
}

export default Page;
