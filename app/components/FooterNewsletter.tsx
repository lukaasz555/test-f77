export const FooterNewsletter = () => {
	return (
		<div style={{ maxWidth: '300px' }}>
			<div>
				<p className='font-heading uppercase text-header text-xs tracking-widest'>
					newsletter
				</p>
			</div>

			<div>
				<p>Become a member and receive 15% off for your first order.</p>
				<label>
					E-mail
					<input type='text' style={{ border: '1px solid blue' }} />
				</label>
			</div>

			<div>
				<button>subscribe</button>
			</div>
		</div>
	);
};
