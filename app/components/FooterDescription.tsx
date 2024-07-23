export const FooterDescription = () => {
	const description = `There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don't look even slightly
					believable.`;

	return (
		<div className='flex flex-col gap-2' style={{ maxWidth: '300px' }}>
			<div>
				<p className='font-heading uppercase text-header text-xs tracking-widest'>
					customer support
				</p>
			</div>

			<div className='flex flex-col gap-1'>
				<p>{description}</p>
			</div>
		</div>
	);
};
