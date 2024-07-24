export const FooterCustomerSupport = () => {
	return (
		<div
			className='flex flex-col gap-2'
			style={{ maxWidth: '300px', minWidth: '220px' }}>
			<div>
				<p className='font-heading uppercase text-header text-xs tracking-widest'>
					customer support
				</p>
			</div>

			<div className='flex flex-col items-start gap-1'>
				<a href='/help' className='text-text text-sm hover:underline'>
					Help Center
				</a>
				<a href='/returns' className='text-text text-sm hover:underline'>
					Returns
				</a>
				<a href='/track-order' className='text-text text-sm hover:underline'>
					Track Your Order
				</a>
				<a href='/contact' className='text-text text-sm hover:underline'>
					Contact
				</a>
			</div>
		</div>
	);
};
