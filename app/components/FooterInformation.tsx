export const FooterInformation = () => {
	return (
		<div
			className='flex flex-col gap-2'
			style={{ maxWidth: '300px', minWidth: '220px' }}>
			<div>
				<p className='font-heading uppercase text-header text-xs tracking-widest'>
					information
				</p>
			</div>

			<div className='flex flex-col items-start gap-1'>
				<a
					href='/about'
					className='text-text text-sm hover:underline text-left'>
					About us
				</a>
				<a href='/refunds' className='text-text text-sm hover:underline'>
					Refund policy
				</a>
				<a
					href='/terms-of-service'
					className='text-text text-sm hover:underline'>
					Terms of Service
				</a>
			</div>
		</div>
	);
};
